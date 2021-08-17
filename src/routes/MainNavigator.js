import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Home from 'screens/Home';
import Soon from 'screens/Soon';
import Downloads from 'screens/Downloads';
import MovieInfo from 'screens/Movies/MovieInfo';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false, 
      gestureEnabled: true,
      gestureDirection: "horizontal",
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MovieInfo" component={MovieInfo} />
    </Stack.Navigator>
  );
}

const SoonStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Soon" component={Soon} />
    </Stack.Navigator>
  );
}

const DownloadsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Downloads" component={Downloads} />
    </Stack.Navigator>
  );
}

export { HomeStackNavigator, SoonStackNavigator, DownloadsStackNavigator };

