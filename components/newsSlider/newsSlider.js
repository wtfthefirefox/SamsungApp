import React from 'react';
import { Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import icons from '../../assets/svg/icons';

const NewsSlider = () => {
    return (
        <NewsSliderWrapper>
            <icons.ArrowPrev />
            <ScrollView horizontal={true} >
                <Image source={require('../../assets/img/36Gy2aThDCQVXxbX7yyRtF.jpg')} style={{width: 315, height: 188.44}} />
            </ScrollView> 
            <icons.ArrowNext />
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