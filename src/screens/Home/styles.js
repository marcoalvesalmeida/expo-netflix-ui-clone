import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';

const Container = styled.ScrollView`
    flex: 1;
    flex-direction: column;
    background-color: #000;
`;

const Poster = styled.ImageBackground` 
    width: 100%;
    height: ${(Dimensions.get('window').height * 81) / 100}px;
`;

const Gradient = styled(LinearGradient)`
    height: 100%;
`;

export {
  Container,
  Poster,
  Gradient
};
