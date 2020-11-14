import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import ArrowReturn from '../returnBtn';

const ItemPage = () => {
  let [activeColor, changeActiveColor] = useState("#000000");

  return (
    <Wrap>
      <ArrowReturn />
      <Image source={require("../../assets/img/GalaxyA51.png")} style={{width: 200, height: 246}} />
      <ItemTitle>Galaxy A71</ItemTitle>
      <PropsWrapper>
        <PropsItemWrapper>
          <PropsItemTitle>Price</PropsItemTitle>
          <PropsItemValue>Starts at 1199 $</PropsItemValue>
        </PropsItemWrapper>
        <PropsItemWrapper>
          <PropsItemTitle>Choose your color </PropsItemTitle>
          <ColorsListWrapper>
            <TouchableOpacity onPress={() => changeActiveColor("#000000")}>
              <ColorsItemWrapper isActive={activeColor === "#000000" ? true : false}>
                <ColorsItem color="#000000" />
              </ColorsItemWrapper>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeActiveColor("#678234")}>
              <ColorsItemWrapper isActive={activeColor === "#678234" ? true : false} >
                <ColorsItem color="#678234" />
              </ColorsItemWrapper>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeActiveColor("#fcbacb")}>
              <ColorsItemWrapper isActive={activeColor === "#fcbacb" ? true : false}>
                <ColorsItem color="#fcbacb" />
              </ColorsItemWrapper>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeActiveColor("#fc2730")}>
              <ColorsItemWrapper isActive={activeColor === "#fc2730" ? true : false}>
                <ColorsItem color="#ff2730" />
              </ColorsItemWrapper>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeActiveColor("#fc4527")}>
              <ColorsItemWrapper isActive={activeColor === "#fc4527" ? true : false}>
                <ColorsItem color="#fc4527" />
              </ColorsItemWrapper>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeActiveColor("#fe24ab")}>
              <ColorsItemWrapper isActive={activeColor === "#fe24ab" ? true : false}>
                <ColorsItem color="#fe24ab" />
              </ColorsItemWrapper>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeActiveColor("#abfe23")}>
              <ColorsItemWrapper isActive={activeColor === "#abfe23" ? true : false} last>
                <ColorsItem color="#abfe23" />
              </ColorsItemWrapper>
            </TouchableOpacity>
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
          <PropsItemValue>7.6'' QXGA+ Dynamic AMOLED 2X (22.5:18) Infinity Flex Display (2208x1768) HDR10+ certified 120Hz refresh rate</PropsItemValue>
        </PropsItemWrapper>
        <PropsItemWrapper>
          <PropsItemTitle>Cover display</PropsItemTitle>
          <PropsItemValue>6.2'' HD+ Super AMOLED Display (25:9) (2260x816)</PropsItemValue>
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
  width: 33px;
  height: 33px;
  border-width: 3px;
  border-color: ${props => props.isActive ? '#3F8AE0' : '#CCCCCC'};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 50;
  margin-right: ${props => props.last ? 0 : 4};
  margin-bottom: 5px;
`;

const ColorsItem = styled.View`
  width: 30px;
  height: 30px;
  background-color: ${props => props.color};
  border-width: 8px;
  border-color: #ffffff;
  border-radius: 50;
`;

const PropsItemTitle = styled.Text`
  font-size: 16px;
  color: #000000;
  font-weight: bold;
`;

const PropsItemValue = styled.Text`
  max-width: 150px;
  font-size: 16px;
  color: #e6e6e6;
`;

export default ItemPage;