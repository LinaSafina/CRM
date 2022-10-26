import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Header } from './components/Header/Header';
import { SideMenu } from './components/SideMenu/SideMenu';
import { ContentContainer } from './components/ContentContainer/ContentContainer';

function App() {
  return (
    <div className='app'>
      <Header />
      <SideMenu></SideMenu>
      <ContentContainer></ContentContainer>
    </div>
  );
}

export default App;
