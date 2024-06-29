import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useEffect } from "react";
import * as ScreenOrientation from 'expo-screen-orientation';

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    return () => { ScreenOrientation.unlockAsync()};
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>AI GUESS MASTER</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Mode Select')}> 
        <Text style={styles.buttonText}>Play</Text> 
      </TouchableOpacity>
    </SafeAreaView>
  );
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
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;