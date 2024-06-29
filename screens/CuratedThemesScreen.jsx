import { SafeAreaView, StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import {
  animals,
  accents,
  christmas,
  actItOut,
  emotions,
  sports,
  halloween,
  professions
} from "../CuratedWordLists";
import CuratedThemeCard from "../components/CuratedThemeCard";
import { useEffect } from "react";
import * as ScreenOrientation from 'expo-screen-orientation';

const CuratedThemesScreen = ({ navigation }) => {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    return () => { ScreenOrientation.unlockAsync()};
  }, []);

  const handleBackPress = () => {
    navigation.navigate('Mode Select');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Curated Themes</Text>

      <View style={styles.row}>
        <CuratedThemeCard wordList={animals} navigation={navigation}
          title="Animals" picture={require('../assets/CuratedThemeIcons/animals.webp')} />
        <CuratedThemeCard wordList={emotions} navigation={navigation}
          title="Emotions" picture={require('../assets/CuratedThemeIcons/emotions.webp')}/>
      </View>
      <View style={styles.row}>
        <CuratedThemeCard wordList={accents} navigation={navigation}
          title="Accents" picture={require('../assets/CuratedThemeIcons/accents.webp')}/>
        <CuratedThemeCard wordList={sports} navigation={navigation}
          title="Sports" picture={require('../assets/CuratedThemeIcons/sports.webp')}/>
      </View>

      <View style={styles.row}>
        <CuratedThemeCard wordList={christmas} navigation={navigation}
          title="Christmas" picture={require('../assets/CuratedThemeIcons/christmas.webp')}/>
        <CuratedThemeCard wordList={halloween} navigation={navigation}
          title="Halloween" picture={require('../assets/CuratedThemeIcons/halloween.webp')}/>
      </View>

      <View style={styles.row}>
        <CuratedThemeCard wordList={actItOut} navigation={navigation}
          title="Act It Out" picture={require('../assets/CuratedThemeIcons/act_it_out.webp')}/>
        <CuratedThemeCard wordList={professions} navigation={navigation}
          title="Professions" picture={require('../assets/CuratedThemeIcons/professions.webp')}/>
      </View>

      <TouchableOpacity onPress={handleBackPress}>
        <Text>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A0CAF0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
    width: '90%'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24
  }
});

export default CuratedThemesScreen;