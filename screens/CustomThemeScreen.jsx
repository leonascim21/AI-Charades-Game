import { StyleSheet, TextInput, SafeAreaView, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
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
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Custom Theme</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter text"
                onChangeText={setText}
                value={text}
            />
            <TouchableOpacity style={styles.button} onPress={handlePlayPress}>
                <Text style={styles.buttonText}>Play</Text>
            </TouchableOpacity>
            {loading ? (<ActivityIndicator size="large" color="#0000ff" />) 
            : error ? (<Text style={styles.errorText}>Error: {error.message || JSON.stringify(error)}</Text>)
            : (wordList && wordList.length === 0 && <Text></Text>)
            }
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A0CAF0',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'black',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 8,
        marginBottom: 20,
        width: '100%',
    },
    button: {
        backgroundColor: '#FFD700',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        marginTop: 20,
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#FFD700',
        borderRadius: 10,
    },
    backButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CustomThemeScreen;