import { useState } from "react";
import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Platform, StatusBar  } from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation';

const GameScreen = ({ route, navigation }) => {
    const { wordList } = route.params;
    const initialList = wordList || ["No more words!"];
    const [list, setList] = useState(initialList);
    const [points, setPoints] = useState(0);
    const [word, setWord] = useState(initialList[0]);

    useEffect(() => {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
        return () => { ScreenOrientation.unlockAsync()};
    }, []);

    const getWord = (currentList) => {
        if (currentList.length === 0) return "No more words!";
        const randomNum = Math.floor(Math.random() * currentList.length);
        const word = currentList[randomNum];
        currentList.splice(randomNum, 1);
        setList([...currentList]);
        return word;
    };

    const handlePressCorrect = () => {
        if (word !== "No more words!") {
            setPoints(points + 1);
        }
        setWord(getWord(list));
    };

    const handlePressPass = () => {
        setWord(getWord(list));
    };


    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={handlePressCorrect} style={styles.CorrectCircle}>
                <View>
                    <Text style={styles.correctText}>Correct</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePressPass} style={styles.PassCircle}>
                <View>
                    <Text style={styles.passText}>Pass</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.wordContainer}>
                <Text style={styles.wordText}>{word}</Text>
            </View>
            <View style={styles.pointsContainer}>
                <Text style={styles.pointsText}>Points: {points}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    CorrectCircle: {
        position: 'absolute',
        left: -100,
        width: 400,
        height: '100%',
        backgroundColor: '#CCE6CC',
        borderTopRightRadius: 500,
        borderBottomRightRadius: 500,
        justifyContent: 'center',
        alignItems: 'center',
    },
    PassCircle: {
        position: 'absolute',
        right: -100,
        width: 400,
        height: '100%',
        backgroundColor: '#FFFFCC',
        borderTopLeftRadius: 500,
        borderBottomLeftRadius: 500,
        justifyContent: 'center',
        alignItems: 'center',
    },
    correctText: {
        fontSize: 24,
        fontWeight: 'bold',
        opacity: 1,
    },
    passText: {
        fontSize: 24,
        fontWeight: 'bold',
        opacity: 1,
    },
    wordContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 280,
    },
    wordText: {
        fontSize: 36,
        textAlign: 'center',
    },
    pointsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pointsText: {
        fontSize: 24,
    },
});

export default GameScreen;