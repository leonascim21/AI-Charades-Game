import React, {useEffect} from 'react'
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native'
import * as ScreenOrientation from 'expo-screen-orientation';

const ResultsScreen = ({navigation}) => {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    return () => { ScreenOrientation.unlockAsync()};
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Go Home</Text>
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
});

export default ResultsScreen;