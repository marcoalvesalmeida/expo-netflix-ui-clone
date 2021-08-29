import React, {useEffect, useState} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Content, Background, Gradient, Hero, Cover, PlayButton, PlayText, Title, Resume, Icon } from './styles';

const movies = [{
    background: 'https://img.elo7.com.br/product/zoom/1DFAEEB/poster-cartaz-breaking-bad-serie-netflix-sucesso.jpg',
    cover: 'https://img.elo7.com.br/product/zoom/1DFAEEB/poster-cartaz-breaking-bad-serie-netflix-sucesso.jpg',
    title: 'Breaking Bad',
    resume: 'O novo drama "Breaking Bad" narra a história de Walter White, um humilde professor de química que vê sua vida se transformar quando descobre ser portador de um câncer terminal. ... ele começa a usar suas habilidades em química a favor do crime, montando um laboratório de drogas para financiar seus anseios.',
  },
  {
    background: 'https://img.elo7.com.br/product/zoom/30415DA/big-poster-serie-netflix-justiceiro-lo003-tamanho-90x60-cm-justiceiro-netflix.jpg',
    cover: 'https://img.elo7.com.br/product/zoom/30415DA/big-poster-serie-netflix-justiceiro-lo003-tamanho-90x60-cm-justiceiro-netflix.jpg',
    title: 'Justiceiro',
    resume: 'O agente do FBI Frank Castle se transforma em um justiceiro após sua esposa e filho terem sido assassinados por criminosos. Ele é gravemente ferido no ataque e considerado morto por Howard Saint, que ordenou o golpe. Após sua recuperação, Castle se torna um vigilante fortemente armado que não para por nada até se vingar de Saint e desmoronar seu império.',
  },
];

const MovieInfo = ({route}) => {
  const navigation = useNavigation();
  const [movieId, setMovieId] = useState(0);

  useEffect(() => {
    if (route.params?.id) {
      setMovieId(route.params.id);
    }
  }, [route.params?.id]);


  return (
    <Container>
          <Content>
              <View style={{...StyleSheet.absoluteFill}}>  
                <Background
                  source={{ uri: movies[movieId].background}}
                  blurRadius={8}
                >
                  <Gradient
                      locations={[0, 0.2, 0.6, 0.93]}
                      colors={[
                          'rgba(0,0,0,0)',
                          'rgba(0,0,0,0)',
                          'rgba(0,0,0,0.4)',
                          'rgba(1,1,1,1)',
                      ]}
                  >
                    <Hero>
                      <TouchableOpacity>
                        <Cover
                          source={{uri: movies[movieId].cover}}
                        />
                      </TouchableOpacity>
                    </Hero>
                    <PlayButton onPress={() => navigation.navigate('MoviePlayer')}>
                      <Icon 
                        name="play" 
                        size={30} color="#FFF" 
                      />
                      <PlayText>Assistir</PlayText>
                    </PlayButton>
                    <Title>{movies[movieId].title}</Title>
                    <Resume>{movies[movieId].resume}</Resume>
                  </Gradient>
                </Background>
              </View>
          </Content>
    </Container>
  );
}

export default MovieInfo;