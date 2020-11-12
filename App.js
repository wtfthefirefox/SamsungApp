import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView, ScrollView } from 'react-native';
import { NativeRouter, Route } from "react-router-native";

import Header from './components/header';
import NewsSlider from './components/newsSlider';
import AboutSection from './components/aboutSection';
import CatalogSlider from './components/catalogSlider';
import AboutPage from './components/aboutPage';
import itemPage from './components/itemPage';

const App = () => {
  return (
    <NativeRouter>
      <SafeAreaView style={{backgroundColor: "#e6e6e6"}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <AppContainer>
            <Header />
            <Route exact path="/">
              <NewsSlider />
              <AboutSection />
              <CatalogSlider />
            </Route>
            <Route path="/about" component={AboutPage} />
            <Route path="/item/1" component={itemPage} />
          </AppContainer>
        </ScrollView>
      </SafeAreaView>
    </NativeRouter>
  );
}

const AppContainer = styled.View`
  background-color: #ffffff;
  width: 100%;
  flex-direction: column;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 20px;
`;

export default App;