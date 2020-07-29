import React from 'react';
import styled from 'styled-components';
import { LightRoom } from './modules/light-room/LightRoom';

const Container = styled('div')`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Container>
      <LightRoom></LightRoom>
    </Container>
  );
}

export default App;
