import React, { useState } from 'react';

export const StoreContext = React.createContext();

let initialState = {
  authorized: false,
  modalAuth: false,
  modalExit: false,
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

  const changeModalExitState = () => {
    setState((prevState) => {
      return {
        ...prevState,
        modalExit: !prevState.modalExit,
      };
    });
  };

  return (
    <StoreContext.Provider
      value={{
        authorized: state.authorized,
        modalAuth: state.modalAuth,
        modalExit: state.modalExit,
        changeAuthState: changeAuthState,
        changeModalAuthState: changeModalAuthState,
        changeModalExitState: changeModalExitState,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};
