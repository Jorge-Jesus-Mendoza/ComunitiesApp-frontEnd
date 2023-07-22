import { RootStackParams } from '../navigator/StackNavigator';
import { DashboardScreen } from '../screens/DashboardScreen';

export const DashboardHome = {
  name: 'DashboardScreen' as keyof RootStackParams,
  component: DashboardScreen,
  options: { title: 'Inicio' },
  initialParams: { initialRouteName: 'DashboardScreen' as keyof RootStackParams },
};
