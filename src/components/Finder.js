/* eslint import/no-webpack-loader-syntax: off */
import React from 'react';
import styled from 'styled-components';
import { shade } from 'polished';
import ToolbarButton from './ToolbarButton';
import IconChevronLeft from '-!react-svg-loader!../assets/svg/chevron-left.svg';
import IconChevronRight from '-!react-svg-loader!../assets/svg/chevron-right.svg';
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
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #e4e3e3;
  background: linear-gradient(to bottom, #e4e3e3 0%, #cccccc 100%);
  border-top: 1px solid #f3f5f4;
  border-bottom: 1px solid #959495;
  height: 55px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 4px 0 5px 8px;
`;

const Top = styled.div`
  position: relative;
`;

const Bottom = styled.div``;

const Actions = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;

  > *:not(:last-child) {
    margin-right: 8px;
  }

  &:hover {
    svg {
      opacity: 1;
    }
  }
`;

const Tag = styled.span`
  width: 12px;
  height: 12px;
  display: inline-block;
  border-radius: 50%;
  background-color: ${props => props.theme[props.tagColor]};
  border: 1px solid ${props => shade(0.8, props.theme[props.tagColor])};
  color: ${props => shade(0.45, props.theme[props.tagColor])};
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

const Title = styled.div`
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  
  > *:not(:first-child) {
    margin-left: -1px;
  }
`;

class Finder extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Top>
            <Actions>
              <Tag tagColor="tag-red">
                <TagIcon>
                  <IconClose />
                </TagIcon>
              </Tag>
              <Tag tagColor="tag-orange">
                <TagIcon>
                  <IconMinus />
                </TagIcon>
              </Tag>
              <Tag tagColor="tag-green">
                <TagIcon>
                  <IconExpand />
                </TagIcon>
              </Tag>
            </Actions>
            <Title>Applications</Title>
          </Top>
          <Bottom>
            <ButtonGroup>
              <ToolbarButton _icon={<IconChevronLeft />} />
              <ToolbarButton _icon={<IconChevronRight />} _disabled />
            </ButtonGroup>
          </Bottom>
        </Header>
      </Wrapper>
    );
  }
}

export default Finder;
