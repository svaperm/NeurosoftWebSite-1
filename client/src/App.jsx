import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Header/components/Nav';
import { ModalAuth } from './components/Modal';
import React from 'react';
import { StoreContainer } from './context/StoreContext';
import { innerRoutes, outerRoutes } from './components/constants/routes';
import { Footer } from './components/Footer';

const App = () => (
  <StoreContainer>
    <div className="App">
      <ModalAuth />
      <Header />
      <div className="container">
        <Routes>
          {outerRoutes.map(({ path, component }) => (
            <Route path={path} element={component}></Route>
          ))}

          {innerRoutes.map(({ path, component }) => (
            <Route path={path} element={component}></Route>
          ))}
        </Routes>
      </div>
      <Footer />
    </div>
  </StoreContainer>
);

export default App;
