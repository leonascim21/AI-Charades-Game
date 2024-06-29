import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

const CuratedThemeCard = ({ wordList, navigation, title, picture }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Game", { wordList })}>
      <Text style={styles.title}>{title}</Text>
    <Image
      source={picture}
      style={styles.image}
    />
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    padding: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  }
});

export default CuratedThemeCard;
