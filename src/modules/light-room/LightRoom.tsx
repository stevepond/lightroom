import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Light } from './components/Light';
import { Switch } from './components/Switch';

const Room = styled('div')`
  align-self: center;
  border: 1px solid silver;
  background: #000000;
  display: inline-flex;
  width: 1200px;
  height: 600px;
  justify-content: space-around;
  align-items: center;
`;

export const LightRoom: FC = () => {
  const [light, setLight] = useState(false);
  return (
    <Room>
      <Switch {...{ light, setLight }}></Switch>
      <Light {...{ light }}></Light>
    </Room>
  );
};
