import React from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';

import Header from 'components/Header';
import Hero from 'components/Hero';
import Movies from 'components/Movies';

import { Container, Poster, Gradient } from './styles';

const api = [
	require('../../../assets/movie1.jpg'),
	require('../../../assets/movie2.jpg'),
	require('../../../assets/movie3.jpg'),
	require('../../../assets/movie4.jpg')
];

class Home extends React.Component {

    async changeOrientation(){
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }

    componentDidUpdate(){
        this.changeOrientation();
    };

    render(){
        return (
            <Container>
                <Poster
                    source={require('../../../assets/featured.jpg')}>
                    <Gradient
                        locations={[0, 0.2, 0.6, 0.93]}
                        colors={[
                            'rgba(0,0,0,0.5)',
                            'rgba(0,0,0,0)',
                            'rgba(0,0,0,0)',
                            'rgba(0,0,0,1)',
                        ]}
                    >
                        <Header />
                        <Hero />
                    </Gradient>
                </Poster>
                <Movies label='Prévias' item={api} type="preview" />
                <Movies label='Recomendados' item={api} type="movie" />
				<Movies label='Top 10' item={api} type="movie" />
            </Container>
        );
    }
}

export default Home;