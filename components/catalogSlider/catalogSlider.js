import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';

import icons from '../../assets/svg/icons';

const CatalogSlider = () => {
  return (
    <>
      <CatalogTitle CatalogTitle>Catalog</CatalogTitle>
      <SliderWrapper>
        <icons.ArrowPrev />
        <Image source={require('../../assets/img/GalaxyA51.png')} style={{width: 200, height: 246}} />
        <icons.ArrowNext />
      </SliderWrapper>
      <CatalogItemTitle>Galaxy A71</CatalogItemTitle>
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

const CatalogItemTitle = styled.Text`
  font-size: 20px;
  line-height: 29px;
  text-align: center;
`;

export default CatalogSlider;