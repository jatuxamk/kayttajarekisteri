import React from 'react';
import { Container } from '@mui/material';
import Kayttajalista from './components/Kayttajalista';
import Ylapalkki from './components/Ylapalkki';


function App() {
  return (
    <>

      <Ylapalkki/>

      <Container>

        <Kayttajalista />

      </Container>

    </>
  );
}

export default App;
