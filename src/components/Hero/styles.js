import styled from 'styled-components/native';

const Container = styled.View`
    position: absolute;
    width: 100%;
    align-items: center;
    bottom: 8px;
`;

const Banner = styled.Image` 
    height: 100px;
`;

const Tags = styled.View`
    justify-content: center;
    margin-top: 20px;
    flex-direction: row;
`;

const TagItem = styled.Text` 
    color: #FFF;
    padding: 0 8px;
    font-size: 13px;
`;

const Separator = styled.View` 
    width: 3px;
    height: 3px;
    background-color: red;
    margin: 6px 0;
    border-radius: 3px;
`;

const MenuHero = styled.View` 
    width: 90%;
    margin-top: 15px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.TouchableOpacity` 
    align-items: center;
`;

const TextButton = styled.Text` 
    color: #FFFFFF;
    font-size: 13px;
    margin-top: 3px;
`;

const Play = styled.TouchableOpacity` 
    padding-top: 10px;
    padding-bottom: 10px;
    flex-direction: row;
    background-color: #FFFFFF;
    width: 110px;
    height: 35px;
    border-radius: 2px;
    align-items: center;
    justify-content: center;
`;

const TextPlay = styled.Text`
    font-size: 15px;
    font-weight: bold;
    padding-left: 5px;
`;

export {
  Container,
  Banner,
  Tags,
  TagItem,
  Separator,
  MenuHero,
  Button,
  TextButton,
  Play,
  TextPlay,
};
