import StackNavigator, { RootStackParams } from '../navigator/StackNavigator';
import { RootTopTabParams } from '../navigator/TopTabNavigator';

export const Dashboard = {
  name: 'DashboardScreen' as keyof RootTopTabParams,
  component: StackNavigator,
  options: { title: 'Inicio' },
  initialParams: { initialRouteName: 'DashboardScreen' as keyof RootStackParams },
};
