import { RootDrawerParams } from '../navigator/DrawerNavigator';
import { HomeScreen } from '../screens/HomeScreen';

export const Home = {
  name: 'HomeScreen' as keyof RootDrawerParams,
  component: HomeScreen,
};
