import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';

const ItemPage = () => {
  return (
    <Wrap>
      <Image source={require("../../assets/img/GalaxyA71.png")} style={{width: 200, height: 246}} />
      <ItemTitle>Galaxy A71</ItemTitle>
      <PropsWrapper>
        <PropsItemWrapper>
          <PropsItemTitle>Price</PropsItemTitle>
          <PropsItemValue>Starts at 1199 $</PropsItemValue>
        </PropsItemWrapper>
        <PropsItemWrapper>
          <PropsItemTitle>Choose your color </PropsItemTitle>
          <ColorsListWrapper>
            <ColorsItemWrapper active>
              <ColorsItem color="#000000" />
            </ColorsItemWrapper>
            <ColorsItemWrapper>
              <ColorsItem color="#678234" />
            </ColorsItemWrapper>
            <ColorsItemWrapper last>
              <ColorsItem color="#FCBACB" />
            </ColorsItemWrapper>
          </ColorsListWrapper>
        </PropsItemWrapper>
        <PropsItemWrapper>
          <PropsItemTitle>Warranty</PropsItemTitle>
          <PropsItemValue>1 year</PropsItemValue>
        </PropsItemWrapper>
        <PropsItemWrapper>
          <PropsItemTitle>Weight</PropsItemTitle>
          <PropsItemValue>282 g</PropsItemValue>
        </PropsItemWrapper>
        <PropsItemWrapper>
          <PropsItemTitle>Main display</PropsItemTitle>
          <PropsItemValue>7.6'' QXGA+ Dynamic AMOLED 2X</PropsItemValue>
        </PropsItemWrapper>
        <PropsItemWrapper>
          <PropsItemTitle>Cover display</PropsItemTitle>
          <PropsItemValue>7.6'' QXGA+ Dynamic AMOLED 2X (22.5:18) Infinity Flex Display (2208x1768) HDR10+ certified 120Hz refresh rate</PropsItemValue>
        </PropsItemWrapper>
        <PropsItemWrapper last>
          <PropsItemTitle>Description </PropsItemTitle>
          <PropsItemValue>The full screen phone that folds to fit in your pocket with revolutionary flexible display, a camera made to stand on its own, and a dual battery that lasts all day. Meet the phone changing the shape of the future.</PropsItemValue>
        </PropsItemWrapper>
      </PropsWrapper>
    </Wrap>
  )
}

const Wrap = styled.View`
  padding: 10px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ItemTitle = styled.Text`
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  margin-bottom: 20px;
`;

const PropsWrapper = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const PropsItemWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  ${props => !props.last ? 'border-bottom-width: 1px;  border-bottom-color: #e6e6e6;' : ''};
  padding-bottom: 5px;
`;

const ColorsListWrapper = styled.View`
  max-width: 150px;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const ColorsItemWrapper = styled.View`
  width: 40px;
  height: 40px;
  border-width: 3px;
  border-color: ${props => props.active ? '#3F8AE0' : '#CCCCCC'};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 50;
  margin-right: ${props => props.last ? 0 : 5};
  margin-bottom: 5px;
`;

const ColorsItem = styled.View`
  width: 37px;
  height: 37px;
  background-color: ${props => props.color};
  border-width: 8px;
  border-color: #ffffff;
  border-radius: 50;
`;

const PropsItemTitle = styled.Text`
  font-size: 16px;
  color: #000000;
`;

const PropsItemValue = styled.Text`
  max-width: 150px;
  font-size: 16px;
  color: #e6e6e6;
`;

export default ItemPage;