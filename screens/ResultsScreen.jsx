import React, { useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, View, ScrollView } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

const ResultsScreen = ({ route, navigation }) => {
  const { points, correctWords, passedWords } = route.params;

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    return () => { ScreenOrientation.unlockAsync() };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Results</Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsText}>Points Scored: {points}</Text>
          <Text style={styles.resultsText}>Correct Words:</Text>
          {correctWords.map((word, index) => (
            <Text key={index} style={styles.wordText}>{word}</Text>
          ))}
          <Text style={styles.resultsText}>Passed Words:</Text>
          {passedWords.map((word, index) => (
            <Text key={index} style={styles.wordText}>{word}</Text>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Go Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A0CAF0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  resultsContainer: {
    alignItems: 'center',
  },
  resultsText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  wordText: {
    fontSize: 20,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ResultsScreen;