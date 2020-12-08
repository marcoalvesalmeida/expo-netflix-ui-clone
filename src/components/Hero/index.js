import React from 'react';
import { Feather, Ionicons } from '@expo/vector-icons';

import {
  Container, Banner, Tags, TagItem, Separator, MenuHero, Button, TextButton, Play, TextPlay
} from './styles';

const Hero = () => (
  <Container>
    <Banner resizeMode="contain" source={require('../../../assets/featured-logo.png')} />
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
        <Play onPress={() => alert("Enganei o bobo na casca do ovo!")}>
          <Ionicons name="ios-play" size={26}></Ionicons>
          <TextPlay>Assistir</TextPlay>
        </Play>
        <Button>
            <Feather name="info" size={22} color="#FFFFFF" />
            <TextButton>Saiba mais</TextButton>
        </Button>
    </MenuHero>
</Container>
)

export default Hero;