import React, { useRef, useState } from 'react';
import { Video } from 'expo-av';
import { MaterialIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  video: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').width * 0.5625,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default function Player() {
  const videoRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [iconPausePlay, setIconPausePlay] = useState('pause-circle-outline');

  function handlePlayBackStatusUpdate(e) {
    if (e.isPlaying && !playing) {
      setPlaying(true);
    }

    if (!e.isPlaying && playing) {
      setPlaying(false);
    }

    if (e.isPlaying) {
      setPosition(e.positionMillis);
    }

    if (duration === 0) {
      setDuration(e.durationMillis);
    }
  }

  function handleDoneSliding(value) {
    setPosition(value);
    videoRef.current.setPositionAsync(value);
  }

  async function skip(bool) {
    const status = await videoRef.current.getStatusAsync();
    const curPos = status.positionMillis;
    const tenSeconds = 10000;
    const newPos = bool ? curPos + tenSeconds : curPos - tenSeconds;

    videoRef.current.setPositionAsync(newPos);
  }

  function togglePlayPause() {
    if (playing) {
      setIconPausePlay('play-circle-outline');
      videoRef.current.pauseAsync();
    } else {
      setIconPausePlay('pause-circle-outline');
      videoRef.current.playAsync();
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Video
          ref={videoRef}
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          onPlaybackStatusUpdate={handlePlayBackStatusUpdate}
          style={styles.video}
        />
        <View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => skip(false)}>
              <MaterialIcons name="replay-10" size={50} color="#E50914" />
            </TouchableOpacity>
            <TouchableOpacity onPress={togglePlayPause}>
              <MaterialIcons name={iconPausePlay} size={50} color="#E50914" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => skip(true)}>
              <MaterialIcons name="forward-10" size={50} color="#E50914" />
            </TouchableOpacity>
          </View>
          <Slider
            value={position}
            maximumValue={duration}
            onSlidingComplete={handleDoneSliding}
            minimumTrackTintColor="#E50914"
            thumbTintColor="#E50914"
            maximumTrackTintColor="#666"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
