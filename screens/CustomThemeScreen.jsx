import { StyleSheet, TextInput, SafeAreaView, Button, Text} from 'react-native';
import { useEffect, useState } from "react";
import * as ScreenOrientation from 'expo-screen-orientation';
import useCustomTheme from "../hooks/useCustomTheme";

const CustomThemeScreen = ({ navigation }) => {  
    const [text, setText] = useState('');
    const { wordList, loading, error, fetchWordList } = useCustomTheme();

    useEffect(() => {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
        return () => { ScreenOrientation.unlockAsync()};
    }, []);

    useEffect(() => {
        if (wordList.length > 0 && !loading && !error) {
            navigation.navigate("Game", { wordList });
        }
    }, [wordList, loading, error, navigation]);

    const handlePlayPress = async () => {
        if (text === "") return;
        await fetchWordList(text);
    };

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                placeholder="Enter text"
                onChangeText={setText}
                value={text}
            />
            <Button title="Play" onPress={handlePlayPress} />
                {loading ? (<Text>Loading...</Text>) 
                : error ? (<Text>Error: {error.message || JSON.stringify(error)}</Text>) 
                : (wordList && wordList.length === 0 && (<Text></Text>))
                }
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 8,
      },
  });

export default CustomThemeScreen;