import {NavigationContainer} from '@react-navigation/native';
import {ReactNode} from 'react';
import AuthProvider from './src/context/AuthContext';
import SideMenu from './src/navigator/DrawerNavigator';
import {PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <PaperProvider>
          <SideMenu />
        </PaperProvider>
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: {children: ReactNode}) => {
  return <AuthProvider>{children}</AuthProvider>;
};
export default App;
