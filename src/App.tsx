import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Header } from './components/Header/Header';
import { SideMenu } from './components/SideMenu/SideMenu';
import { Content } from './components/Content/Content';

function App() {
  return (
    <div className='app'>
      <Header />
      <SideMenu></SideMenu>
      <Content></Content>
    </div>
  );
}

export default App;
