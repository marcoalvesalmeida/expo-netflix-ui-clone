import styled from 'styled-components/native';

const Container = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 50px 25px 0 25px;
    width: 100%;
`;

const Logo = styled.Image`
    width: 20px;
    height: 40px;
`;

const Menu = styled.Text` 
    font-size: 18px;
    color: #FFFFFF;
    letter-spacing: 0.1px;
`;

export {
    Container,
    Logo,
    Menu
}