import { RouteProp } from '@react-navigation/native';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import { Route } from '../interfaces/routesInterfaces';
import { DashboardHome, FamilyHome, ProgramsHome } from '../routes';
import { RootTopTabParams } from './TopTabNavigator';

export type RootStackParams = {
  DashboardScreen: undefined;
  FamilyHomeScreen: undefined;
  ProgramsHomeScreen: undefined;
};

type StackScreenProps = {
  route: RouteProp<RootTopTabParams>;
  navigation: StackNavigationProp<RootStackParams>;
};
const Stack = createStackNavigator<RootStackParams>();

const RoutesList: Route[] = [DashboardHome, FamilyHome, ProgramsHome];

const StackNavigator = ({route, navigation, ...props}: StackScreenProps) => {
  const {initialRouteName} = route.params ?? {
    initialRouteName: 'DashboardScreen',
  };
  // if (initialRouteName) navigation.navigate(initialRouteName as keyof RootStackParams);
  console.log('initialRouteName', initialRouteName);
  return (
    initialRouteName && (
      <Stack.Navigator
        initialRouteName={initialRouteName as keyof RootStackParams}
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: 'white',
          },
        }}>
        {RoutesList.map(({name, component, options, initialParams}, index) => (
          <Stack.Screen
            key={`${index + 1}.-${name}`}
            name={name as keyof RootStackParams}
            component={component}
            options={options}
            initialParams={initialParams as any}
          />
        ))}
      </Stack.Navigator>
    )
  );
};
export default StackNavigator;
