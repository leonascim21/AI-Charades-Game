import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ModeSelectScreen from './screens/ModeSelectScreen'
import CuratedThemesScreen from './screens/CuratedThemesScreen';
import GameScreen from './screens/GameScreen';
import ResultsScreen from './screens/ResultsScreen';
import CustomThemeScreen from './screens/CustomThemeScreen';

const Stack = createStackNavigator();

export default function App() {
  const noHeader = { headerShown: false }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={noHeader}/>
        <Stack.Screen name="Mode Select" component={ModeSelectScreen} />
        <Stack.Screen name="Curated Themes" component={CuratedThemesScreen} options={noHeader} />
        <Stack.Screen name='Custom Theme' component={CustomThemeScreen} />
        <Stack.Screen name="Game" component={GameScreen} options={noHeader}/>
        <Stack.Screen name='Results' component={ResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
