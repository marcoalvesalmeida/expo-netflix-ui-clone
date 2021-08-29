import styled from 'styled-components';

import { Ionicons } from '@expo/vector-icons';

const Content = styled.View`
    background-color: #333;
    padding: 16px;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
`;

const Column = styled.View`
    flex-direction: column;
    width: 100%;
`;

const Row = styled.View`
    flex-direction: row;
    width: 100%;
`; 

const Title = styled.Text`
    color: #fff;
    margin-left: 10px;
    font-size: 20px;
    font-weight: bold;
    width: 52%;
`;

const Subtitle = styled.Text`
    color: #777;
    margin-left: 10px;
    font-size: 13px;
`;

const Resume = styled.Text`
    color: #eee;
    margin-left: 10px;
    font-size: 15px;
    width: 60%;
    line-height: 23px;
`;

const Cover = styled.Image`
    height: 160px;
    width: 120px;
    border-radius: 4px;
`;

const Close = styled.TouchableOpacity`
    width: 25px;
    height: 25px;
    background-color: #444;
    border-radius: 25px;
    margin-left: 5px;
    align-items: center;
    justify-content: center;
`;

export const Actions = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ActionColumn = styled.TouchableOpacity`
    width: 60px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ActionText = styled.Text`
    color: #777;
    font-size: 13px;
`;

export const PlayButton = styled.TouchableOpacity`
    width: 60%;
    background-color: #fff;
    height: 40px;
    flex-direction: row;
    justify-content: center;
    border-radius: 4px;
    align-items: center;
`;

export const PlayText = styled.Text`
    color: #111;
    margin-left: 5px;
    font-size: 14px;
    font-weight: bold;
`;

const Icon = styled(Ionicons)`
    font-weight: bold;
`;

const IndicativeClassification = styled.Image`
    width: 20px;
    height: 20px;
    margin-left: 10px;
`;

const Divider = styled.View`
    margin-top: 10px;
    width: 100%;
    height: 0.5px;
    background-color: #777;
`;

const MoreInfo = styled.TouchableOpacity`
    width: 100%;
    padding-top: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
`;

const MoreInfoLeft = styled.View`
    flex-direction: row;
    align-items: center;
`;

const MoreInfoText = styled.Text`
    color: #eee;
    margin-left: 10px;
    font-size: 15px;
`;

export {
    Content, Column, Row, Title, Subtitle, Cover, Close, Icon, Resume, IndicativeClassification, ActionText, MoreInfo, MoreInfoLeft, MoreInfoText, Divider
}