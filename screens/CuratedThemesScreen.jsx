import { SafeAreaView, StyleSheet } from "react-native";
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
      <CuratedThemeCard wordList={wordList1} navigation={navigation}
        title="Pirates" picture="https://picsum.photos/100"/>
      <CuratedThemeCard wordList={wordList2} navigation={navigation}
        title="Warriors" picture="https://picsum.photos/100"/>
      <CuratedThemeCard wordList={wordList3} navigation={navigation}
        title="Pacers" picture="https://picsum.photos/100"/>
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

export default CuratedThemesScreen;