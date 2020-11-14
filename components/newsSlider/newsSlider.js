import React from 'react';
import { Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';

const NewsSlider = () => {
    return (
        <NewsSliderWrapper>
            <ScrollView horizontal={true} style={{contentSize: {height: 1500, width: 375, backgroundColor: "#ffffff"}}} >
                <Image source={require('../../assets/img/36Gy2aThDCQVXxbX7yyRtF.jpg')} style={{marginLeft: 20, width: 315, height: 188.44, marginRight: 40}} />
                <Image source={require('../../assets/img/samsungWatch3.png')} style={{width: 315, height: 188.44, marginRight: 20}} />
            </ScrollView> 
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