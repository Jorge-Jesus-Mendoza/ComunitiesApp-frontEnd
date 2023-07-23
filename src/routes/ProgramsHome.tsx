import {RootStackParams} from '../navigator/StackNavigator';
import {ProgramsScreen} from '../screens/ProgramsScreen';

export const ProgramsHome = {
  name: 'ProgramsHomeScreen' as keyof RootStackParams,
  component: ProgramsScreen,
  options: {title: 'Programas Destino'},
  // initialParams: { initialRouteName: 'DashboardScreen' as keyof RootStackParams },
};
