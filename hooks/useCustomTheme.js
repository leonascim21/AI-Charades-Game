import { useState } from 'react';

const useCustomTheme = () => {
    const [wordList, setWordList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWordList = async (customTheme) => {
        const apiKey = process.env.EXPO_PUBLIC_OPENAI_API_KEY
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [
                        {
                            role: "user",
                            content: `Generate a list of 100 comma 
                            separated words/short phrases related to the users topic input. 
                            These are going to be used as the words/short phrases for a 
                            charades game. Depending on the topic input generate words/short 
                            phrases that are clearly identifiable to the topic but not too overly 
                            specific in order for the game to be fun, include verbs in some of them 
                            for example if the topic input is "christmas" one thing you could 
                            return would be "Wrapping Presents". Reply only with the comma 
                            separated list and nothing else. The topic input is ${customTheme}`
                        }
                    ],
                    max_tokens: 4096,
                }),
            });

            console.log("Response status:", response.status);
            const data = await response.json();
            console.log("Response data:", data);

            if (response.ok) {
                const wordsArray = data.choices[0].message.content.trim().split(',').map(word => word.trim());
                setWordList(wordsArray);
            } else {
                throw new Error(data.error ? data.error.message : "Failed to fetch word list");
            }
        } catch (error) {
            console.error("Fetch error:", error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return { wordList, loading, error, fetchWordList };
};

export default useCustomTheme;