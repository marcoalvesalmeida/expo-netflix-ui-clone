import React from 'react';

import { useNavigation } from '@react-navigation/native';
import BottomSheet from 'reanimated-bottom-sheet';
import { MaterialIcons } from '@expo/vector-icons'; 

import {
  Content, Column, Row, Title, Subtitle, Cover, 
  Close, Icon, Resume, IndicativeClassification, 
  PlayButton, PlayText, Actions, ActionColumn, 
  ActionText, MoreInfo, MoreInfoText, Divider, 
  MoreInfoLeft
} from './styles';

import img18 from '../../../assets/indicative-classification/18.png';

const MyBottomSheet = ({sheetRef, close}) => {
    const navigation = useNavigation();

    const renderContent = () => (
        <Content>
          <Row>
            <Cover source={{uri: 'https://img.elo7.com.br/product/zoom/1DFAEEB/poster-cartaz-breaking-bad-serie-netflix-sucesso.jpg'}} />
            <Column>
              <Row>
                <Title>Breaking Bad</Title>
                <Close onPress={close}>
                  <Icon 
                    name="close" 
                    size={23} 
                    color="#FFF" 
                  />
                </Close>
              </Row>
              <Row>
                <Subtitle>2013</Subtitle><IndicativeClassification source={img18} /><Subtitle>5 Temporadas</Subtitle>
              </Row>
              <Row>
                <Resume>
                  {`${('O novo drama "Breaking Bad" narra a história de Walter White (Bryan Cranston), um humilde professor de química que vê sua vida se transformar quando descobre ser portador de um câncer terminal. ... ele começa a usar suas habilidades em química a favor do crime, montando um laboratório de drogas para financiar seus anseios.').substring(0,100-3) + '...'}`}
                </Resume>
              </Row>
            </Column>
          </Row>
          <Actions>
            <PlayButton onPress={() => navigation.navigate('MoviePlayer')}>
              <Icon 
                name="play" 
                size={30} 
                color="#111" 
              />
              <PlayText>Assistir</PlayText>
            </PlayButton>
            <ActionColumn onPress={() => navigation.navigate('Downloads')}>
              <Icon 
                name="download-outline" 
                size={30} 
                color="#FFF"
              />
              <ActionText>Baixar</ActionText>
            </ActionColumn>
            <ActionColumn onPress={() => navigation.navigate('MoviePlayer')}>
              <Icon 
                name="play-outline" 
                size={30} 
                color="#FFF"
              />
              <ActionText>Prévia</ActionText>
            </ActionColumn>
          </Actions>
          <Divider />
          <MoreInfo onPress={() => navigation.navigate('MovieInfo')}>
            <MoreInfoLeft>
              <Icon 
                name="play-outline" 
                size={30} 
                color="#FFF"
              />
              <MoreInfoText>
                Episódios e informações
              </MoreInfoText>
            </MoreInfoLeft>
            <MaterialIcons 
              name="keyboard-arrow-right" 
              size={30} 
              color="#fff" 
            />
          </MoreInfo>          
        </Content>
    );

    return (
        <BottomSheet
            ref={sheetRef}
            snapPoints={[290, 0]}
            initialSnap={1}
            borderRadius={10}
            renderContent={renderContent}
            enabledContentTapInteraction={false}
        />
    );
};

export default MyBottomSheet;
