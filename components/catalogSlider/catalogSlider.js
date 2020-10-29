import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';

import icons from '../../assets/svg/icons';

const CatalogSlider = () => {
  return (
    <>
      <CatalogTitle CatalogTitle>Catalog</CatalogTitle>
      <SliderWrapper>
        <icons.PrevArrow />
        <Image source={require('../../assets/img/GalaxyA51.png')} style={{width: 200, height: 246}} />
        <icons.NextArrow />
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
  margin-bottom: 40px;
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