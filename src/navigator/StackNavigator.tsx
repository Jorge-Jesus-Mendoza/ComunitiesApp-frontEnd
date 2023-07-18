import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { DashboardScreen } from '../screens/DashboardScreen';
import FamilyHomeScreen from '../screens/FamilyHomeScreen';
import { RootTopTabParams } from './TopTabNavigator';

export type RootStackParams = {
  DashboardScreen: undefined;
  FamilyHomeScreen: undefined;
};

type StackScreenProps = {
  route: RouteProp<RootTopTabParams>;
  navigation: StackNavigationProp<RootStackParams>;
};
const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = ({ route, navigation, ...props }: StackScreenProps) => {
  const { initialRouteName } = route.params ?? { initialRouteName: 'DashboardScreen' };
  // if (initialRouteName) navigation.navigate(initialRouteName as keyof RootStackParams);
  console.log('initialRouteName', initialRouteName);
  return (initialRouteName &&
    <Stack.Navigator
      initialRouteName={initialRouteName as keyof RootStackParams}
      screenOptions={{
        // headerShown: false,
      }}>
      <Stack.Screen name="FamilyHomeScreen" component={FamilyHomeScreen} />
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
