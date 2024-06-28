import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from 'react-native'

const ModeSelectScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity> 
            <Text>Custom Theme</Text> 
        </TouchableOpacity>

        <TouchableOpacity> 
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