import React from 'react';
import styled from 'styled-components/native';

const AboutPage = () => {
  return (
    <Wrapper>
      <Paragrath>Samsung was founded by Lee Byung-chul in 1938 as a trading company. Over the next three decades, the group diversified into areas including food processing, textiles, insurance, securities, and retail. Samsung entered the electronics industry in the late 1960s and the construction and shipbuilding industries in the mid-1970s; these areas would drive its subsequent growth. Following Lee's death in 1987, Samsung was separated into four business groups – Samsung Group, Shinsegae Group, CJ Group and Hansol Group. Since 1990, Samsung has increasingly globalised its activities and electronics; in particular, its mobile phones and semiconductors have become its most important source of income. As of 2017, Samsung has the 6th highest global brand value.
Notable Samsung industrial affiliates include Samsung Electronics (the world's largest information technology company, consumer electronics maker and chipmaker measured by 2017 revenues), Samsung Heavy Industries (the world's 2nd largest shipbuilder measured by 2010 revenues), and Samsung Engineering and Samsung C&T (respectively the world's 13th and 36th largest construction companies). Other notable subsidiaries include Samsung Life Insurance (the world's 14th largest life insurance company), Samsung Everland (operator of Everland Resort, the oldest theme park in South Korea) and Cheil Worldwide (the world's 15th largest advertising agency, as measured by 2012 revenues).
Samsung has a powerful influence on South Korea's economic development, politics, media and culture and has been a major driving force behind the "Miracle on the Han River". Its affiliate companies produce around a fifth of South Korea's total exports. Samsung's revenue was equal to 17% of South Korea's $1,082 billion GDP.</Paragrath>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  flex-direction: column;
  align-items: center;
`;

const Paragrath = styled.Text`
  max-width: 335px;
  font-size: 15px;
  line-height: 25px;
  color: #000000;
`;

export default AboutPage;