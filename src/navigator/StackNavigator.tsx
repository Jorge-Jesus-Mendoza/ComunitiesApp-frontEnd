import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import {
  createStackNavigator
} from '@react-navigation/stack';
import React from 'react';
import { defaultInitialParams } from '../data';
import { Route } from '../interfaces';
import { DashboardHome, FamilyHome, FamilyList, ProgramsHome } from '../routes';
import { RootTopTabParams } from './TopTabNavigator';


export type RootStackParams = {
  FamilyHomeScreen: undefined;
  FamilyListScreen: undefined;
  DashboardScreen: undefined;
  ProgramsHomeScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const RoutesList: Route[] = [DashboardHome, FamilyHome, FamilyList, ProgramsHome];

const StackNavigator = ({ route, navigation, ...props }: MaterialTopTabScreenProps<RootTopTabParams>) => {
  console.log('route', props);
  const { initialRouteName, screenOptions } = route.params ?? defaultInitialParams;
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
          ...screenOptions,
        }}>
        {RoutesList.map(({ name = initialRouteName, component, options, initialParams }, index) => (
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
