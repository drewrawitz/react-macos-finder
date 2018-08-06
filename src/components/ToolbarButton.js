import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { shade } from 'polished';

const StyledButton = styled.button`
  background: #ffffff;
  background: linear-gradient(to bottom, #ffffff 0%,#ffffff 9%,#f9f7f8 10%,#eaeaea 100%);
  font-size: 14px;
  color: #757575;
  padding: 0;
  width: 27px;
  height: 24px;
  border: 1px solid #c3c3c3;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${props => !props._disabled &&`
    &:active {
      background: linear-gradient(to bottom, #e0e0e0 0%, #d7d7d7 100%);
      color: #454545;
    }
  `}
  
  ${props => props._disabled &&`
    color: #c0c0c0;
  `}
  
  ${props => props.active &&`
    background: #6b6b6b;
    color: #fff;
    border-color: #636363;
    
    &:active {
      background: ${shade(0.65, '#6b6b6b')};
      color: #fff;
    }
  `}
  
  svg {
    width: 1em;
    height: 1em;
    fill: currentColor;
  }
`;

const ToolbarButton = (props) => {
  return (
    <StyledButton {...props}>
      {props._icon}
    </StyledButton>
  )
}

export default ToolbarButton
