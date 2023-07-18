import StackNavigator, { RootStackParams } from '../navigator/StackNavigator';

export const Dashboard = {
  name: 'DashboardScreen' as keyof RootStackParams,
  component: StackNavigator,
  options: { title: 'Inicio' },
  initialParams: { initialRouteName: 'DashboardScreen' as keyof RootStackParams },
};
