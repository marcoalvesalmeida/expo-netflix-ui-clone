import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as Linking from "expo-linking";

import {MainStackNavigator} from "./TabsNavigator";

const prefix = Linking.makeUrl("/");

const Routes = () => {

  const linking = {
    prefixes: [prefix, 'https://*.nortefood.com'],
    config: {
      screens: {
        Home: {
          screens: {
            Início: { 
              screens: {
                MovieInfo: "titles/:id", 
              },
            },
          },
        },
      },
    },
  };

  return(
    <NavigationContainer linking={linking}>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default Routes;