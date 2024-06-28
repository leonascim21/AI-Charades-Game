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
        <TouchableOpacity onPress={() => navigation.navigate('Custom Theme')}> 
            <Text>Custom Theme</Text> 
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Curated Themes')}> 
            <Text>Curated Themes</Text> 
        </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default ModeSelectScreen