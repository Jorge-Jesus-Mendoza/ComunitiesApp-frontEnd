import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {DashboardScreen} from '../screens/HomeScreen';
import StackHeader from '../components/StackHeader';
import {LoginScreen} from '../screens/LoginScreen';
import {Dashboard} from '../routes/Home';
import {Login} from '../routes/Login';

// export type RootStackParams = {
//   DashboardScreen: undefined;
//   Pagina2Screen: undefined;
//   Pagina3Screen: undefined;
//   PersonaScreen: {id: number; nombre: string};
// };

// const Stack = createStackNavigator<RootStackParams>();

const Stack = createStackNavigator();

const RoutesList = [Dashboard, Login];

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {RoutesList.map(route => (
        <Stack.Screen name={route.name} component={route.component} />
      ))}
    </Stack.Navigator>
  );
};
export default StackNavigator;
