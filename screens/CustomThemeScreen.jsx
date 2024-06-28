import { StyleSheet, TextInput, SafeAreaView, Button } from 'react-native';
import { useEffect, useState } from "react";
import * as ScreenOrientation from 'expo-screen-orientation';

const CustomThemeScreen = ({ navigation }) => {  
    const [text, setText] = useState('');

    useEffect(() => {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
        return () => { ScreenOrientation.unlockAsync()};
    }, []);

  return (
    <SafeAreaView style={styles.container}>
         <TextInput
          placeholder="Enter text"
          onChangeText={setText}
          value={text}
        />
        <Button title="play"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 8,
      },
  });

export default CustomThemeScreen;