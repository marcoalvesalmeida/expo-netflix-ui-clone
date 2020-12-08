import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
	padding: 20px 0;
`;

const Label = styled.Text`
	color: #fff;
	font-size: 16px;
	margin: 0 0 5px 10px;
`;

const MovieScroll = styled.ScrollView`
	padding-left: 10px;
`;

const MoviePoster = styled.Image`
	width: ${Math.round((Dimensions.get('window').width * 28) / 100)}px;
	height: 150px;
`;

const MovieCard = styled.View`
	padding-right: 9px;
`;

export {
    Container,
    Label, 
    MovieScroll, 
    MovieCard, 
    MoviePoster
};