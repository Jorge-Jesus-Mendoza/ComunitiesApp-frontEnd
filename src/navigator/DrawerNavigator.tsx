import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import StackHeader from '../components/StackHeader';
import {InternalMenuStyled} from '../components/InternalMenuStyled';
import {Home} from '../routes/Home';
import {Login} from '../routes/Login';
import {Register} from '../routes/Register';
import {Dashboard} from '../routes/Dashboard';
import {Test} from '../routes/Test';

const Drawer = createDrawerNavigator();

const RoutesList = [Home, Login, Register, Dashboard, Test];
const SideMenu = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: ({scene, navigation}) => (
          <StackHeader scene={scene} navigation={navigation} />
        ),
      }}
      drawerContent={props => <InternalMenu {...props} />}>
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
