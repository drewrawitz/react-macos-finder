/* eslint import/no-webpack-loader-syntax: off */
import React from 'react'
import styled from 'styled-components'
import { shade } from 'polished'
import IconClose from '-!react-svg-loader!../assets/svg/close.svg';
import IconMinus from '-!react-svg-loader!../assets/svg/minus.svg';
import IconExpand from '-!react-svg-loader!../assets/svg/expand2.svg';

const Wrapper = styled.div`
  width: 1015px;
  height: 580px;
  background-color: #fff;
  color: #393939;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
`;

const Header = styled.header`
  position: relative;
  background: #e4e3e3;
  background: linear-gradient(to bottom, #e4e3e3 0%,#cccccc 100%);
  border-top: 1px solid #f3f5f4;
  border-bottom: 1px solid #959495;
  height: 55px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const Top = styled.div`
  padding-top: 4px;
`;

const Actions = styled.div`
  display: flex;
  position: absolute;
  top: 4px;
  left: 8px;

  > *:not(:last-child) {
    margin-right: 8px;
  }
  
  &:hover {
    svg { opacity: 1; }
  }
`;

const Tag = styled.span`
  width: 12px;
  height: 12px;
  display: inline-block;
  border-radius: 50%;
  background-color: ${props => props.theme[props.color]};
  border: 1px solid ${props => shade(0.8, props.theme[props.color])};
  color: ${props => shade(0.45, props.theme[props.color])};
`;

const TagIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  
  svg {
    width: 80%;
    height: 80%;
    opacity: 0;
    fill: currentColor;
  }
`;

const Title = styled.span`
  font-size: 12px;
`

class Finder extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Top>
            <Actions>
              <Tag color="tag-red">
                <TagIcon>
                  <IconClose />
                </TagIcon>
              </Tag>
              <Tag color="tag-orange">
                <TagIcon>
                  <IconMinus />
                </TagIcon>
              </Tag>
              <Tag color="tag-green">
                <TagIcon>
                  <IconExpand />
                </TagIcon>
              </Tag>
            </Actions>
            <Title>Applications</Title>
          </Top>
        </Header>
      </Wrapper>
    )
  }
}

export default Finder

