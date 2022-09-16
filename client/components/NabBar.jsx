import React from 'react';
//import styles from '../styles/NavBar.module.css';
import styled from 'styled-components';

// import required icons from muiv5 library...
import {
  PhoneEnabled,
  LocalMallOutlined
} from '@mui/icons-material';

// Styling...
const Container = styled.div`
  color: white;
  background-color: red;
  width: 100%;
  height: 120px;
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0px;
`
const NavLeftContainer = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const NavCenterContainer = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`
const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`
const ListItem = styled.li`
  margin: 20px;
  display: flex;
`
const NavRightContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const CartIcon = styled.div`
  position: relative;
`
const CartCounter = styled.div`
  position: absolute;
  top:30px;
  right: 10px;
  font-weight: bold;
  justify-content: center;
`
const CallButton = styled.div`
  margin-right: 15px;
  display: flex;
`
const Texts = styled.div`
  display: flex;
  flex-direction: column;
`
const OrderNow = styled.span`
  font-weight: bold;
`
const PhoneNumber = styled.span`
  letter-spacing: 3px;
`



export default function NavBar() {
  return (
    <Container>
      <NavLeftContainer>
        <CallButton>
          <PhoneEnabled style={{fontSize: '45px'}} />
        </CallButton>
        <Texts>
          <OrderNow>ORDER NOW</OrderNow>
          <PhoneNumber>012345678</PhoneNumber>
        </Texts>
      </NavLeftContainer>
      <NavCenterContainer>
        <List>
          <ListItem>Homepage</ListItem>
          <ListItem>Products</ListItem>
          <ListItem>Events</ListItem>
          <ListItem>Menu</ListItem>
          <ListItem>Blog</ListItem>
          <ListItem>Contacts</ListItem>
        </List>
      </NavCenterContainer>
      <NavRightContainer>
        <CartIcon><LocalMallOutlined style={{fontSize:'30px'}}/>
        <CartCounter>2</CartCounter>
        </CartIcon>
      </NavRightContainer>
    </Container>
  )
}
