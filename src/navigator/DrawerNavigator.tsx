import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerNavigationProp,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {InternalMenuStyled} from '../components/InternalMenuStyled';
import StackHeader from '../components/StackHeader';
import {Route} from '../interfaces/routesInterfaces';
import {
  Home,
  Login,
  Register,
  TopTabNavigatorRoute,
  ResetPassword,
} from '../routes';

export type RootDrawerParams = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  TopTabNavigator: undefined;
  ResetPasswordScreen: undefined;
};
const Drawer = createDrawerNavigator<RootDrawerParams>();

const RoutesList: Route[] = [
  Home,
  Login,
  Register,
  TopTabNavigatorRoute,
  ResetPassword,
];
const SideMenu = () => (
  <Drawer.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{
      header: ({navigation}: {navigation: DrawerNavigationProp<any, any>}) => (
        <StackHeader navigation={navigation} />
      ),
    }}
    drawerContent={props => <InternalMenu {...props} />}>
    {RoutesList.map(route => (
      <Drawer.Screen
        name={route.name as keyof RootDrawerParams}
        component={route.component}
      />
    ))}
  </Drawer.Navigator>
);
export default SideMenu;

const InternalMenu = (props: DrawerContentComponentProps) => (
  <DrawerContentScrollView>
    <InternalMenuStyled {...props} />
  </DrawerContentScrollView>
);
