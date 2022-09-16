import React from 'react';
//import styles from '../styles/NavBar.module.css';
import styled from 'styled-components';

// import required icons from muiv5 library...
import {PhoneEnabled} from '@mui/icons-material';

// Styling...
const Container = styled.div`
  color: white;
  background-color: red;
  width: 100%;
`
const Item = styled.span`
  
`

const CallButton = styled.div`

`
const Texts = styled.div`

`
const Text = styled.div`
  
`



export default function NabBar() {
  return (
    <Container>
      NavBar component
      <Item>
        <CallButton>
          <PhoneEnabled/>
        </CallButton>
        <Texts>
          <Text>ORDER NOW</Text>
          <Text>012345678</Text>
        </Texts>
      </Item>
    </Container>
  )
}
