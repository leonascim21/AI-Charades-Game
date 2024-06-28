import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ModeSelectScreen from './screens/ModeSelectScreen'
import CuratedThemesScreen from './screens/CuratedThemesScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Mode Select" component={ModeSelectScreen} />
        <Stack.Screen name="Curated Themes" component={CuratedThemesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
