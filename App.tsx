
import { NavigationContainer } from '@react-navigation/native';
import { ReactNode } from 'react';
import AuthProvider from './src/context/AuthContext';
import SideMenu from './src/navigator/DrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <SideMenu />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({ children }: { children: ReactNode; }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
export default App;
