import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Container, Logo, Menu } from './styles';

const Header = () => {
    return (
        <Container>
            <Logo resizeMode="contain" source={require('../../../assets/logo.png')} />
            <TouchableOpacity><Menu>Séries</Menu></TouchableOpacity>
            <TouchableOpacity><Menu>Filmes</Menu></TouchableOpacity>
            <TouchableOpacity><Menu>Minha Lista</Menu></TouchableOpacity>
        </Container>
    )
}

export default Header;