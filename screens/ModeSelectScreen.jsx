import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { useEffect } from "react";
import * as ScreenOrientation from 'expo-screen-orientation';

const ModeSelectScreen = ({navigation}) => {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    return () => { ScreenOrientation.unlockAsync()};
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Select Mode</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Custom Theme')}> 
        <Text style={styles.buttonText}>Custom Theme</Text> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Curated Themes')}> 
        <Text style={styles.buttonText}>Curated Themes</Text> 
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A0CAF0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
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

export default ModeSelectScreen;