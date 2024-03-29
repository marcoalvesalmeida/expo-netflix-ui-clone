import React, { useRef, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import {
  View,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';

import { SizedBox } from '../../styles/global';
import { Container, Controls, TopBar, MovieTitle, ButtonContainer, SliderContainer, BackButton } from './styles';

export default function Player() {
  const navigation = useNavigation();
  const videoRef = useRef(null);
  const [isControls, setIsControls] = useState(true);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [count, setCount] = useState(0);
  const [iconPausePlay, setIconPausePlay] = useState('pause-circle-outline');

  const fadeControls = useRef(new Animated.Value(1)).current;

  var idleTimer = null;

  useEffect(() => {
    if(count >= 5){
      clearTimeout(idleTimer);
      setCount(0);
      hideControls();
    }else{
      idleTimer = setTimeout(() => {
        setCount(count+1);
      }, 1000);
    }

    return function cleanup() {
      clearTimeout(idleTimer);
    };
  }, [count]);

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
    showControls();
    const status = await videoRef.current.getStatusAsync();
    const curPos = status.positionMillis;
    const tenSeconds = 10000;
    const newPos = bool ? curPos + tenSeconds : curPos - tenSeconds;

    videoRef.current.setPositionAsync(newPos);
    if(!playing){
      togglePlayPause();
    }
  }

  function togglePlayPause() {
    showControls();
    if (playing) {
      setIconPausePlay('play-circle-outline');
      videoRef.current.pauseAsync();
    } else {
      setIconPausePlay('pause-circle-outline');
      videoRef.current.playAsync();
    }
  }

  async function showControls() {
    await Animated.timing(fadeControls, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
    setCount(0);
    setIsControls(true);
  }

  async function hideControls() {
    await Animated.timing(fadeControls, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start();
    setIsControls(false);
  }

  return (
    <TouchableWithoutFeedback onPress={isControls ? hideControls : showControls} accessible={false}>
      <Container>
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
            style={{width: Dimensions.get('screen').width, height: Dimensions.get('screen').height}}
          />
          <Controls style={{
            opacity: fadeControls
          }}>
            <TopBar>
              <BackButton onPress={() => navigation.navigate('Home')}>
                <AntDesign name="arrowleft" size={30} color="#FFFFFF" />
              </BackButton>
              <MovieTitle>Big Buck Bunny</MovieTitle>
              <SizedBox size={30} />
            </TopBar>
            <ButtonContainer>
              <TouchableOpacity onPress={() => skip(false)}>
                <MaterialIcons name="replay-10" size={50} color="#FFFFFF" />
              </TouchableOpacity>
              <TouchableOpacity onPress={togglePlayPause}>
                <MaterialIcons name={iconPausePlay} size={50} color="#FFFFFF" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => skip(true)}>
                <MaterialIcons name="forward-10" size={50} color="#FFFFFF" />
              </TouchableOpacity>
            </ButtonContainer>
            <SliderContainer>
              <Slider
                value={position}
                maximumValue={duration}
                onSlidingComplete={handleDoneSliding}
                minimumTrackTintColor="#E50914"
                thumbTintColor="#E50914"
                maximumTrackTintColor="#666"
              />
            </SliderContainer>
          </Controls>
        </View>
      </Container>
    </TouchableWithoutFeedback>
  );
}
