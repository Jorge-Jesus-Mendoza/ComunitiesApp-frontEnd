import {ReactNode, createContext, useReducer, useState} from 'react';
import authReducer from './authReducer';
import {registerUserItem, userItem} from '../../interfaces/authInterfaces';
// Define How looks and what information i have here
export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  lastName?: string;
  tokenId?: string;
  identification_card?: string;
}
// Define the initial state
export const authInitialState: AuthState = {
  isLoggedIn: false,
  userName: undefined,
  lastName: undefined,
  tokenId: undefined,
  identification_card: undefined,
};

// We use this to define what information we need to use in the context

export interface AuthContextProps {
  authState: AuthState;
  logIn: (item: userItem, navigator: any) => void;
  sigIn: (item: userItem) => void;
  logOut: () => void;
}

// Create the context, define the type and the initial state
export const AuthContext = createContext({} as AuthContextProps);

// Create the provider
const AuthProvider = ({children}: {children: ReactNode}) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const logIn = (item: userItem, navigator: any) => {
    dispatch({type: 'logIn', payload: item});
    navigator.navigate('TopTabNavigator');
    setTimeout(() => {
      logOut();
      navigator.navigate('HomeScreen');
    }, 1690152813);
  };

  const sigIn = (item: userItem) => dispatch({type: 'sigIn', payload: item});

  const logOut = () => dispatch({type: 'logout'});
  return (
    <AuthContext.Provider
      value={{
        authState,
        logIn,
        sigIn,
        logOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
