import StackNavigator, { RootStackParams } from "../navigator/StackNavigator";
import { RootTopTabParams } from "../navigator/TopTabNavigator";
import { FamilyHomeScreen, FamilyListScreen } from "../screens";

const Family = {
  name: 'FamilyScreen' as keyof RootTopTabParams,
  component: StackNavigator,
  options: { title: "Familia" },
  initialParams: {
    initialRouteName: "FamilyListScreen" as keyof RootStackParams,
    screenOptions: {

    }
  },
};

const FamilyHome = {
  name: 'FamilyHomeScreen' as keyof RootStackParams,
  component: FamilyHomeScreen,
  options: { title: "Familia" },
  initialParams: { initialRouteName: "FamilyHomeScreen" as keyof RootStackParams },
};
const FamilyList = {
  name: 'FamilyListScreen' as keyof RootStackParams,
  component: FamilyListScreen,
  options: { title: "Familia" },
  initialParams: {
    initialRouteName: "FamilyHomeScreen" as keyof RootStackParams
  },
};

export { Family, FamilyHome, FamilyList };

