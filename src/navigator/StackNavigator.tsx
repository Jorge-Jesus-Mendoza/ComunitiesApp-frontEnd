import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { DashboardScreen } from '../screens/DashboardScreen';
import StackHeader from '../utils/StackHeader';

export type RootStackParams = {
  DashboardScreen: undefined;
  Pagina2Screen: undefined;
  Pagina3Screen: undefined;
  PersonaScreen: {id: number; nombre: string};
};

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
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
export default StackNavigator;
