import React, {useEffect, useRef} from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';

import Header from 'components/Header';
import Hero from 'components/Hero';
import Movies from 'components/Movies';
import MyBottomSheet from 'components/MyBottomSheet';

import { Container, Poster, Gradient } from './styles';

const api = [
	require('../../../assets/movie1.jpg'),
	require('../../../assets/movie2.jpg'),
	require('../../../assets/movie3.jpg'),
	require('../../../assets/movie4.jpg')
];

const Home = () => {

    async function changeOrientation(){
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }

    useEffect(() => {
        changeOrientation();
    }, [changeOrientation]);

    
    const sheetRef = useRef(null);

    return (
        <>
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
                <Movies label='Prévias' item={api} type="preview" bottomSheet={() => sheetRef.current.snapTo(0)} />
                <Movies label='Recomendados' item={api} type="movie" bottomSheet={() => sheetRef.current.snapTo(0)} />
                <Movies label='Top 10' item={api} type="movie" bottomSheet={() => sheetRef.current.snapTo(0)} />
            </Container>
        
            <MyBottomSheet sheetRef={sheetRef} close={() => sheetRef.current.snapTo(1)} />
        </>
    );
}

export default Home;