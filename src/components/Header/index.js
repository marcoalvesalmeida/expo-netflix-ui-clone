import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, Logo, Menu } from './styles';

import LogoImage from '../../../assets/logo.png';

const Header = () => (
  <Container>
    <Logo resizeMode="contain" source={LogoImage} />
    <TouchableOpacity>
      <Menu>Séries</Menu>
    </TouchableOpacity>
    <TouchableOpacity>
      <Menu>Filmes</Menu>
    </TouchableOpacity>
    <TouchableOpacity>
      <Menu>Minha Lista</Menu>
    </TouchableOpacity>
  </Container>
);

export default Header;
