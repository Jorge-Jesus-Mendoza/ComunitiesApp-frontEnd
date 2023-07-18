import { RootDrawerParams } from '../navigator/DrawerNavigator';
import { RegisterScreen } from '../screens/RegisterScreen';

export const Register = {
  name: 'RegisterScreen' as keyof RootDrawerParams,
  component: RegisterScreen,
};
