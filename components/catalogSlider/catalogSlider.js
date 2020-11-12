import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import styled from 'styled-components/native';

import icons from '../../assets/svg/icons';

const CatalogSlider = () => {
  const [transformValue, changeTransformValue] = useState(0);

  return (
    <>
      <CatalogTitle CatalogTitle>Catalog</CatalogTitle>
      <SliderWrapper>
        <TouchableOpacity onPress={() => changeTransformValue(val => val + 240 > 0 ? 0 : val + 240)}>
          <icons.ArrowPrev  />
        </TouchableOpacity>
        <ItemsWrapperHidden>
          <ItemsWrapper transfromXValue={transformValue}>
            <Link to="/item/1">
              <ItemWrapper>
                <Image source={require('../../assets/img/GalaxyA51.png')} style={{width: 200, height: 246}} />
                <CatalogItemTitle>Galaxy A71</CatalogItemTitle>
              </ItemWrapper>
            </Link>
            <ItemWrapper>
              <Image source={require('../../assets/img/GalaxyA71.png')} style={{width: 200, height: 246}} />
              <CatalogItemTitle>Galaxy A51</CatalogItemTitle>
            </ItemWrapper>
            <ItemWrapper>
              <Image source={require('../../assets/img/GalaxyNote10.png')} style={{width: 200, height: 246}} />
              <CatalogItemTitle>Galaxy Note 10</CatalogItemTitle>
            </ItemWrapper>
            <ItemWrapper last>
              <Image source={require('../../assets/img/GalaxyS20.png')} style={{width: 200, height: 246}} />
              <CatalogItemTitle>Galaxy S 20</CatalogItemTitle>
            </ItemWrapper>
          </ItemsWrapper>
        </ItemsWrapperHidden>
        <TouchableOpacity onPress={() => changeTransformValue(val => val - 240 > -960 ? val - 240 : val)}>
          <icons.ArrowNext  />
        </TouchableOpacity>
      </SliderWrapper>
    </>
  )
}

const CatalogTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  line-height: 29px;
  color: #000000;
  text-align: center;
  margin-bottom: 30px;
`;

const SliderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ItemsWrapperHidden = styled.View`
  max-width: 200;
  overflow: hidden;
  height: 246px;
`;

const ItemsWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  transform: ${props => `translateX(${props.transfromXValue}px)`};
`;

const ItemWrapper = styled.View`
  width: 200px;
  height: 246px;
  flex-direction: column;
  margin-right: ${props => props.last ? 0 : '40px'};
`;

const CatalogItemTitle = styled.Text`
  font-size: 20px;
  line-height: 29px;
  text-align: center;
`;

export default CatalogSlider;