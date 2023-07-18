import { MaterialTopTabNavigationOptions } from "@react-navigation/material-top-tabs";

export type Route = {
  name: string,
  component: React.ComponentType<any>;
  options?: MaterialTopTabNavigationOptions;
  initialParams?: Object;
};