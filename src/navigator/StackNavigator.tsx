import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DashboardScreen} from '../screens/DashboardScreen';
import StackHeader from '../utils/StackHeader';

export type RootStackParams = {
  DashboardScreen: undefined;
  Pagina2Screen: undefined;
  Pagina3Screen: undefined;
  PersonaScreen: {id: number; nombre: string};
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Pagina2Screen"
      screenOptions={{
        header: ({scene, navigation}) => (
          <StackHeader scene={scene} navigation={navigation} />
        ),
      }}>
      <Stack.Screen
        name="DashboardScreen"
        options={{headerTitle: 'Dashboard'}}
        component={DashboardScreen}
      />
    </Stack.Navigator>
  );
};
