import React from 'react';
import { Dimensions, Animated } from 'react-native';
import styled from 'styled-components';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #000000;
`;

export const Controls = styled(Animated.View)`
    margin-top: -${screenWidth}px;
    flex: 1;
    background-color: rgba(0,0,0,0.5);
    justify-content: flex-end;
`;

export const TopBar = styled.View`
    width: ${screenHeight}px;
    height: ${screenWidth / 5}px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: ${screenWidth / 5}px;
    padding-left: ${screenHeight / 30}px;
    padding-right: ${screenHeight / 30}px;
`;

export const BackButton = styled.TouchableOpacity`
    width: 30px;
    justify-content: center;
`;

export const MovieTitle = styled.Text`
    font-size: 16px;
    color: #FFFFFF;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: ${screenHeight - (60 + screenHeight / 30 * 2)}px;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    width: ${screenHeight - 20}px;
    padding-left: ${screenWidth / 20}px;
    padding-right: ${screenWidth / 20}px;
`;

export const SliderContainer = styled.View`
    margin-top: ${screenWidth / 4}px;
    margin-bottom: 20px;
    padding-left: ${screenWidth / 20}px;
    padding-right: ${screenWidth / 20}px;
`;

