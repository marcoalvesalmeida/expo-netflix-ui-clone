import React from 'react';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
  Container, Banner, Tags, TagItem, Separator, MenuHero, Button, TextButton, Play, TextPlay,
} from './styles';

import BannerImage from '../../../assets/featured-logo.png';

const Hero = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Banner resizeMode="contain" source={BannerImage} />
      <Tags>
        <TagItem>Vigoroso</TagItem>
        <Separator />
        <TagItem>Envolvente</TagItem>
        <Separator />
        <TagItem>Ação</TagItem>
      </Tags>
      <MenuHero>
        <Button>
          <Feather name="plus" size={26} color="#FFFFFF" />
          <TextButton>Minha Lista</TextButton>
        </Button>
        <Play onPress={() => navigation.navigate('MoviePlayer')}>
          <Ionicons name="ios-play" size={26} />
          <TextPlay>Assistir</TextPlay>
        </Play>
        <Button>
          <Feather name="info" size={22} color="#FFFFFF" />
          <TextButton>Saiba mais</TextButton>
        </Button>
      </MenuHero>
    </Container>
  );
};

export default Hero;
