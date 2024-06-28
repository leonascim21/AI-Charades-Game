import React, {useEffect} from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'
import * as ScreenOrientation from 'expo-screen-orientation';

const ResultsScreen = ({navigation}) => {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    return () => { ScreenOrientation.unlockAsync()};
  }, []);

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Go Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ResultsScreen;