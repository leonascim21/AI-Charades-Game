import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
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

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Mode Select')}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A0CAF0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
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
    color: '#000',
  },
});

export default CuratedThemesScreen;