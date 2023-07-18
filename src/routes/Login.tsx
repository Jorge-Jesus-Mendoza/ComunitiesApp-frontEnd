import { RootDrawerParams } from '../navigator/DrawerNavigator';
import { LoginScreen } from '../screens/LoginScreen';

export const Login = {
  name: 'LoginScreen' as keyof RootDrawerParams,
  component: LoginScreen,
};
