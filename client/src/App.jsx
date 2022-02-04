import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { ModalAuth } from './components/Modal/ModalAuth';
import React from 'react';
import { StoreContainer } from './context/StoreContext';
import { innerRoutes, outerRoutes } from './components/constants/routes';
import { Footer } from './components/Footer';
import { ModalExit } from './components/Modal/ModalExit';

const App = () => (
  <StoreContainer>
    <div className="App">
      <ModalAuth />
      <ModalExit />
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
