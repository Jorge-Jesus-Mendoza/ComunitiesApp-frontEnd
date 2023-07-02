import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { InternalMenuStyled } from '../components/InternalMenuStyled';
import StackHeader from '../components/StackHeader';
import { Home } from '../routes/Home';
import { Login } from '../routes/Login';
import { Register } from '../routes/Register';
import TopTabNavigator from './TopTabNavigator';

const Drawer = createDrawerNavigator();

const RoutesList = [Home, Login, Register,];
const SideMenu = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: ({scene, navigation}) => (
          <StackHeader scene={scene} navigation={navigation} />
        ),
      }}
      drawerContent={props => <InternalMenu {...props} />}>
      <Drawer.Screen name={"TobTabNavigator"} component={TopTabNavigator} />

      {RoutesList.map(route => (
        <Drawer.Screen name={route.name} component={route.component} />
      ))}
    </Drawer.Navigator>
  );
};
export default SideMenu;

const InternalMenu = (props: DrawerContentComponentProps) => (
  <DrawerContentScrollView>
    <InternalMenuStyled {...props} />
  </DrawerContentScrollView>
);
