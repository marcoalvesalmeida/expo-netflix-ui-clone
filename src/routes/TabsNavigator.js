import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import { HomeStackNavigator, SoonStackNavigator, DownloadsStackNavigator } from "./MainNavigator";
import MoviePlayer from 'screens/Movies/MoviePlayer';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({  
        tabBarIcon: ({ focused, size }) => {
          let iconName;
          let color;

          if (route.name === 'Início') {
            iconName = focused
              ? 'home'
              : 'home-outline';
            color = focused
              ? 'white'
              : 'gray';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Em Breve') {
            iconName ='video-collection';
            color = focused
              ? 'white'
              : 'gray';
            return <MaterialIcons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Downloads') {
            iconName = focused
              ? 'download-circle'
              : 'download-circle-outline';
            color = focused
              ? 'white'
              : 'gray';
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          }
          
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#111111',
          borderTopColor: '#111111',
          height: 55,
          paddingBottom: 5,
          paddingTop: 5,
        },
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Início" component={HomeStackNavigator} />
      <Tab.Screen name="Em Breve" component={SoonStackNavigator} options={{ tabBarBadge: 2 }} />
      <Tab.Screen name="Downloads" component={DownloadsStackNavigator} />
    </Tab.Navigator>
  );
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false, 
      gestureEnabled: true,
      gestureDirection: "horizontal",
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}>
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen name="MoviePlayer" component={MoviePlayer} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };