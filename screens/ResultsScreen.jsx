import React, {useEffect} from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'

const ResultsScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Go Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ResultsScreen;