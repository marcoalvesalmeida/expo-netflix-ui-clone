import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #000000;
`;

export const Controls = styled.View`
    margin-top: -${screenWidth}px;
    padding-left: 15px;
    padding-right: 15px;
    flex: 1;
    background-color: rgba(0,0,0,0.2);
    justify-content: flex-end;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    width: ${screenHeight - 20}px;
`;

export const SliderContainer = styled.View`
    margin-top: ${screenWidth / 4}px;
    margin-bottom: 20px;
`;

