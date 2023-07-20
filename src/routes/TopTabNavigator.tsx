import { RootDrawerParams } from '../navigator/DrawerNavigator';
import TopTabNavigator from '../navigator/TopTabNavigator';

export const TopTabNavigatorRoute = {
  name: 'TopTabNavigator' as keyof RootDrawerParams,
  component: TopTabNavigator,
};
