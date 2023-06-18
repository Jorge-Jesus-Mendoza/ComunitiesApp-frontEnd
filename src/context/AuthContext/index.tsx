import { ReactNode, createContext, useReducer } from 'react';
import authReducer from './authReducer';
// Define How looks and what information i have here
export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  favoriteIcon?: string;
}
// Define the initial state
export const authInitialState: AuthState = {
  isLoggedIn: false,
  userName: undefined,
  favoriteIcon: undefined,
};

// We use this to define what information we need to use in the context

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  logOut: () => void;
  changeUserName: (userName: string) => void;
}

// Create the context, define the type and the initial state
export const AuthContext = createContext({} as AuthContextProps);

// Create the provider
const AuthProvider = ({ children }: { children: ReactNode; }) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);
  const signIn = () => dispatch({ type: 'signIn' });
  const logOut = () => dispatch({ type: 'logout' });
  const changeFavoriteIcon = (iconName: string) =>
    dispatch({ type: 'favoriteIcon', payload: iconName });
  const changeUserName = (userName: string) =>
    dispatch({ type: 'changeUserName', payload: userName });
  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        changeFavoriteIcon,
        logOut,
        changeUserName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
