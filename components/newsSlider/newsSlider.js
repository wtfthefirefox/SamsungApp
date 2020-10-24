import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';

import icons from '../../assets/svg/icons';

const NewsSlider = () => {
    return (
        <NewsSliderWrapper>
            <icons.PrevArrow />
            <Image source={require('../../assets/img/36Gy2aThDCQVXxbX7yyRtF.jpg')} style={{width: 335, height: 188.44}} />
            <icons.NextArrow />
        </NewsSliderWrapper>
    )
}

const NewsSliderWrapper = styled.View`
    position: relative;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export default NewsSlider;