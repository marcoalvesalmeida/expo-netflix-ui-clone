import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import MoviePlayer from './screens/MoviePlayer';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="MoviePlayer" component={MoviePlayer} />
      </AppStack.Navigator>

    </NavigationContainer>
  );
}
