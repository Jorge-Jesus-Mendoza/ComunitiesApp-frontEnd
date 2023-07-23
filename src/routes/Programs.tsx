import StackNavigator, {RootStackParams} from '../navigator/StackNavigator';
import {RootTopTabParams} from '../navigator/TopTabNavigator';
import {ProgramsScreen} from '../screens/ProgramsScreen';

export const Programs = {
  name: 'ProgramsScreen' as keyof RootTopTabParams,
  component: StackNavigator,
  options: {title: 'Programas'},
  initialParams: {
    initialRouteName: 'ProgramsHomeScreen' as keyof RootStackParams,
  },
};
