import React from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';

import Player from '../../components/Player';
class MoviePlayer extends React.Component {

  async changeOrientation(){
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
  } 

  async removeOrientation(){
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
  } 
  
  componentDidMount(){
    this.changeOrientation();
  }

  componentWillUnmount(){
    this.removeOrientation();
  }

  render(){
    return (
      <Player />
    );
  }
}

export default MoviePlayer;
