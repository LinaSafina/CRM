import './App.scss';

import { Header } from './components/Header/Header';
import { SideMenu } from './components/SideMenu/SideMenu';
import { Content } from './components/Content/Content';
import { Navigate, Route, Routes } from 'react-router';
import { News } from './components/News/News';
import { Search } from './components/Search/Search';

function App() {
  return (
    <div className='app'>
      <Header />
      <SideMenu></SideMenu>
      <Content>
        <Routes>
          <Route path='/' element={<News />}></Route>
          <Route path='/address' element={<Search />}></Route>
          <Route path='*' element={<Navigate to='/' replace={true} />}></Route>
        </Routes>
      </Content>
    </div>
  );
}

export default App;
