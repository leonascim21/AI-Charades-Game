import { Button, Image, SafeAreaView, StyleSheet } from "react-native";
import {wordList1} from "../CuratedWordLists";

const CuratedThemesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
         <Image
            source={{
            width: 100,
            height: 100,
            uri: "https://picsum.photos/100"
            }}
        ></Image>
        <Button title="pirates" 
                onPress={() => navigation.navigate('Game', { wordList1 })}/>
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