import React, { useState } from 'react';

export const StoreContext = React.createContext();

let initialState = {
  authorized: false,
  modalAuth: false,
};

export const StoreContainer = (props) => {
  const [state, setState] = useState(initialState);

  const changeAuthState = () => {
    setState((prevState) => {
      return {
        ...prevState,
        authorized: !prevState.authorized,
      };
    });
  };

  const changeModalAuthState = () => {
    setState((prevState) => {
      return {
        ...prevState,
        modalAuth: !prevState.modalAuth,
      };
    });
  };

  return (
    <StoreContext.Provider
      value={{
        authorized: state.authorized,
        modalAuth: state.modalAuth,
        changeAuthState: changeAuthState,
        changeModalAuthState: changeModalAuthState,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};
