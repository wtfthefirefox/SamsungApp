import React from 'react';
import { Link } from 'react-router-native';
import styled from 'styled-components/native';

const AboutSection = () => {
    return (
        <>
            <SectionWrapper>
                <SectionTitle>About us</SectionTitle> 
                <SectionValue>Samsung was founded by Lee Byung-chul in 1938 as a trading company. Over the next three decades, the group diversified into areas including food processing, textiles, insurance, securities, and retail. Samsung entered the electronics industry in the late 1960s and the construction and shipbuilding industries in the mid-1970s; these areas would drive its subsequent growth. </SectionValue>
                <Link to="/about">
                    <AboutBtnWrapper>
                        <AboutBtnValue>Read more</AboutBtnValue>
                    </AboutBtnWrapper>
                </Link>
            </SectionWrapper>
        </>
    )
}

const SectionWrapper = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SectionTitle = styled.Text`
    font-weight: bold;
    font-size: 20px;
    line-height: 58px;
    text-align: center;
    color: #000000;
`;

const SectionValue = styled.Text`
    max-width: 335px;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    color: #000000;
    margin-bottom: 40px;
`;

const AboutBtnWrapper = styled.View`
    width: 100px;
    height: 40px;
    border: 1px solid #000;
    flex-direction: row;
    justify-content:  center;
    align-items: center;
    margin-bottom: 40px;
`;

const AboutBtnValue = styled.Text`
    font-size: 15px;
    line-height: 29px;
    color: #000000;
`;

export default AboutSection;