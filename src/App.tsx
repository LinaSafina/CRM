import './App.scss';

import { Header } from './components/Header/Header';
import { SideMenu } from './components/SideMenu/SideMenu';
import { Content } from './components/Content/Content';
import { Navigate, Route, Routes } from 'react-router';
import { News } from './components/News/News';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import React, { Suspense } from 'react';
import { Loading } from './components/Loading/Loading';

const Search = React.lazy(() =>
  import('./components/Search/Search').then(({ Search }) => ({
    default: Search,
  }))
);

function App() {
  return (
    <div className='app'>
      <Header />
      <SideMenu></SideMenu>
      <Content>
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path='/' element={<News />}></Route>
              <Route path='/address' element={<Search />}></Route>
              <Route
                path='*'
                element={<Navigate to='/' replace={true} />}
              ></Route>
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Content>
    </div>
  );
}

export default App;
