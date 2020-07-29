import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import styled from 'styled-components';

export interface LightProps {
  light: boolean;
}

const Icon = styled(FontAwesomeIcon)`
  width: 100%;
  &.on {
    border-radius: 50%;
    box-shadow: 0 0 50px whitesmoke, 0 0 150px whitesmoke;
    transition: box-shadow 0.4s ease;

    path {
      fill: lightgoldenrodyellow;
      opacity: 1;
    }
  }
  path {
    fill: lightgoldenrodyellow;
    opacity: 0.2;
  }
`;

export const Light: FC<LightProps> = ({ light }) => {
  return (
    <Icon className={light ? 'on' : 'off'} size={'10x'} icon={faLightbulb} />
  );
};
