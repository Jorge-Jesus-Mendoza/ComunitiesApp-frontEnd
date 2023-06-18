import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {
  useWindowDimensions
} from 'react-native';
import StackNavigator from './StackNavigator';
// import Tabs from "./Tabs";

const Drawer = createDrawerNavigator();

const SideMenu = () => {
  const { width } = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={(props) => <InternalMenu {...props} />}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      {/* <Drawer.Screen name="ok" component={() => <View><Text>Hi!</Text></View>} /> */}
    </Drawer.Navigator>
  );
};
export default SideMenu;

const InternalMenu = (props: DrawerContentComponentProps) => (
  <DrawerContentScrollView>
    <DrawerItemList {...props} />
    <DrawerItem
      label="Help"
      onPress={() => console.log('her',)}
    />
    {/* Part of Avatar */}
    {/* <View style={styles.avatarContainer}>
      <Text>
        <Icon name="person-circle-outline" size={150} color="#ccc" />
      </Text>
    </View> */}
    {/* Options Menu */}
    {/* <View style={styles.containerMenu}>
      <TouchableOpacity
        style={{ ...styles.buttonMenu, flexDirection: 'row' }}
        onPress={() => navigation.navigate('StackNavigator')}
      >
        <Icon name="compass-outline" size={25} color={colors.primary} />
        <Text style={styles.textMenu}>Stack Navigator</Text>
      </TouchableOpacity>
    </View> */}
  </DrawerContentScrollView>
);
