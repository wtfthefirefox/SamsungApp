import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView, ScrollView, View } from 'react-native';

import Header from './components/header';
import NewsSlider from './components/newsSlider';
import AboutSection from './components/aboutSection';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: "#e6e6e6"}}>
      <ScrollView style={{contentSize: {height: 1000, width: 375, backgroundColor: "#ffffff"}}}>
        <AppContainer>
          <Header />
          <NewsSlider />
          <AboutSection />
        </AppContainer>
      </ScrollView>
    </SafeAreaView>
  );
}

const AppContainer = styled.View`
  background-color: #ffffff;
  width: 100%;
  flex-direction: column;
  padding: 15px 5px 0 5px;
`;

export default App;