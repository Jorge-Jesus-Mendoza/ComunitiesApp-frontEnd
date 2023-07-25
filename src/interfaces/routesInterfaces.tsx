import { MaterialTopTabNavigationOptions } from "@react-navigation/material-top-tabs";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationOptions } from "@react-navigation/stack";
import { RootStackParams } from "../navigator/StackNavigator";

export type initialParams = {
  initialRouteName?: string;
  screenOptions?: StackNavigationOptions | ((props: {
    route: RouteProp<RootStackParams, keyof RootStackParams>;
    navigation: any;
  }) => StackNavigationOptions) | undefined;
}


export type Route = {
  name: string,
  component: React.ComponentType<any>;
  options?: MaterialTopTabNavigationOptions;
  initialParams?: initialParams;
};