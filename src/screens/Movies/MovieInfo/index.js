import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Content, Background, Gradient, Hero, Cover, PlayButton, PlayText, Title, Resume, Icon } from './styles';

const movie = {
  background: 'https://img.elo7.com.br/product/zoom/1DFAEEB/poster-cartaz-breaking-bad-serie-netflix-sucesso.jpg',
  cover: 'https://img.elo7.com.br/product/zoom/1DFAEEB/poster-cartaz-breaking-bad-serie-netflix-sucesso.jpg',
  title: 'Breaking Bad',
  resume: 'O novo drama "Breaking Bad" narra a história de Walter White, um humilde professor de química que vê sua vida se transformar quando descobre ser portador de um câncer terminal. ... ele começa a usar suas habilidades em química a favor do crime, montando um laboratório de drogas para financiar seus anseios.',
};

const MovieInfo = () => {
  const navigation = useNavigation();

  return (
    <Container>
          <Content>
              <View style={{...StyleSheet.absoluteFill}}>  
                <Background
                  source={{ uri: movie.background}}
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
                          source={{uri: movie.cover}}
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
                    <Title>{movie.title}</Title>
                    <Resume>{movie.resume}</Resume>
                  </Gradient>
                </Background>
              </View>
          </Content>
    </Container>
  );
}

export default MovieInfo;