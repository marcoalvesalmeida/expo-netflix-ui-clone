import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';

import Home from './src/screens/Home';

export default function App() {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" style="light" />
      <Home></Home>
    </>
  );
}
