import { useState } from "react";
import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity} from "react-native";

const GameScreen = ({ route, navigation }) => {
    const { wordList1 } = route.params;
    const initialList = wordList1 || ["No more words!"];
    const [list, setList] = useState(initialList);
    const [word, setWord] = useState(initialList[0]);

    const getWord = (currentList) => {
        if (currentList.length === 0) return "No more words!";
        const randomNum = Math.floor(Math.random() * currentList.length);
        const word = currentList[randomNum];
        currentList.splice(randomNum, 1);
        setList([...currentList]);
        return word;
    };

    const handlePress = () => {
        setWord(getWord(list));
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={handlePress}>
                <Text>{word}</Text>
            </TouchableOpacity>
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
  });

export default GameScreen;