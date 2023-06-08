import React from 'react';
import 'react-native-gesture-handler';
import {DashboardScreen} from './src/screens/DashboardScreen';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper';
import {StackNavigator} from './src/navigator/StackNavigator';
import {DrawerNavigator} from './src/navigator/DrawerNavigator';

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};
export default App;
