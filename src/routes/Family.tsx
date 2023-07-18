import StackNavigator, { RootStackParams } from "../navigator/StackNavigator";
import { RootTopTabParams } from "../navigator/TopTabNavigator";

export const Family = {
  name: 'FamilyScreen' as keyof RootTopTabParams,
  component: StackNavigator,
  options: { title: "Familia" },
  initialParams: { initialRouteName: "FamilyHomeScreen" as keyof RootStackParams },
};
