import React, { useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';

import Player from 'components/Player';
const MoviePlayer = () => {

  async function changeOrientation(){
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
  } 

  async function removeOrientation(){
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
  } 

  useEffect(() => {
    changeOrientation();

    return function cleanup() {
      removeOrientation();
    };
  }, []);

  return (
    <Player />
  );
}

export default MoviePlayer;
