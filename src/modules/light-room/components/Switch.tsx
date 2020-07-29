import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import styled from 'styled-components';

export interface SwitchProps {
  light: boolean;
  setLight: React.Dispatch<React.SetStateAction<boolean>>;
}

const Icon = styled(FontAwesomeIcon)`
  &.fa-toggle-off path {
    fill: indianred;
  }
  path {
    fill: darkseagreen;
    width: 100%;
  }
`;

export const Switch: FC<SwitchProps> = ({ light, setLight }) => {
  return (
    <Icon
      size={'8x'}
      onClick={() => setLight(!light)}
      icon={light ? faToggleOn : faToggleOff}
    />
  );
};
