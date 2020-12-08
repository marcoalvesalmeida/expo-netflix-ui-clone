import React, { useEffect } from 'react';

import * as Updates from 'expo-updates';

import { TouchableOpacity, Text, AppState } from 'react-native';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Movies from '../../components/Movies';

import { Container, Poster, Gradient } from './styles';

const api = [
	require('../../../assets/movie1.jpg'),
	require('../../../assets/movie2.jpg'),
	require('../../../assets/movie3.jpg'),
	require('../../../assets/movie4.jpg')
];

class Home extends React.Component {

    updateApp = nextState => {
        async function update(){
            const { isAvailable } = await Updates.checkForUpdateAsync();
            if(isAvailable){
                alert("Olá usuário! O app tem novas atualizações, ao clicar em OK o app será atualizado e aberto novamente. Clique em Ok e aguarde alguns segundos.");
                await Updates.fetchUpdateAsync();
                await Updates.reloadAsync();
            }
        }
        update();
    }

    componentDidMount(){
        //AppState.addEventListener("change", this.updateApp);
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
                <Movies label='Recomendados' item={api} />
				<Movies label='Top 10' item={api} />
            </Container>
        );
    }
}

export default Home;