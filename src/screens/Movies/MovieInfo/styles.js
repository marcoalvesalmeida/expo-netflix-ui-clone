import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const screenHeight = Dimensions.get('screen').height;

export const Container = styled.ScrollView`
    flex: 1;
    background-color: #000;
`;

export const Content = styled.View`
    flex: 1;
    height: ${screenHeight}px;
`;

export const Background = styled.ImageBackground`
    height: ${screenHeight - 200}px;
    opacity: 1;
    justify-content: flex-start;
    background-color: #000;
`;

export const Gradient = styled(LinearGradient)`
    height: 100%;
    padding-left: 20px;
    padding-right: 20px;
`;

export const Hero = styled.View`
    width: 100%;
    height: 350px;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
`;

export const Cover = styled.Image`
    align-self: center;
    width: 200px;
    height: 300px;
    border-radius: 12px;
    background-color: rgba(0,0,0,0.5);
`;

export const PlayButton = styled.TouchableOpacity`
    margin-top: 15px;
    width: 100%;
    background-color: red;
    height: 40px;
    flex-direction: row;
    justify-content: center;
    border-radius: 4px;
    align-items: center;
`;

export const PlayText = styled.Text`
    color: #FFF;
    margin-left: 5px;
    font-size: 14px;
    font-weight: bold;
`;

export const Title = styled.Text`
    margin-top: 15px;
    color: #FFF;
    font-weight: bold;
    font-size: 16px;
`;

export const Resume = styled.Text`
    margin-top: 15px;
    color: #FFF;
`;

export const Icon = styled(Ionicons)`
    color: #FFF;
    font-weight: bold;
`;


