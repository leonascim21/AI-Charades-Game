import { SafeAreaView, StyleSheet, View } from "react-native";
import {wordList1, wordList2, wordList3} from "../CuratedWordLists";
import CuratedThemeCard from "../components/CuratedThemeCard";
import { useEffect } from "react";
import * as ScreenOrientation from 'expo-screen-orientation';

const CuratedThemesScreen = ({ navigation }) => {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    return () => { ScreenOrientation.unlockAsync()};
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <CuratedThemeCard wordList={wordList1} navigation={navigation}
          title="Animals" picture={require('../assets/CuratedThemeIcons/animals.webp')} />
        <CuratedThemeCard wordList={wordList2} navigation={navigation}
          title="Emotions" picture={require('../assets/CuratedThemeIcons/emotions.webp')}/>
      </View>
      <View style={styles.row}>
        <CuratedThemeCard wordList={wordList3} navigation={navigation}
          title="Accents" picture={require('../assets/CuratedThemeIcons/accents.webp')}/>
        <CuratedThemeCard wordList={wordList3} navigation={navigation}
          title="Sports" picture={require('../assets/CuratedThemeIcons/sports.webp')}/>
      </View>

      <View style={styles.row}>
        <CuratedThemeCard wordList={wordList3} navigation={navigation}
          title="Christmas" picture={require('../assets/CuratedThemeIcons/christmas.webp')}/>
        <CuratedThemeCard wordList={wordList3} navigation={navigation}
          title="Halloween" picture={require('../assets/CuratedThemeIcons/halloween.webp')}/>
      </View>

      <View style={styles.row}>
        <CuratedThemeCard wordList={wordList3} navigation={navigation}
          title="Act It Out" picture={require('../assets/CuratedThemeIcons/act_it_out.webp')}/>
        <CuratedThemeCard wordList={wordList3} navigation={navigation}
          title="Professions" picture={require('../assets/CuratedThemeIcons/professions.webp')}/>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
    width: '90%'
  },
});

export default CuratedThemesScreen;