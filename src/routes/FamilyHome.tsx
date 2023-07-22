import { RootStackParams } from "../navigator/StackNavigator";
import FamilyHomeScreen from "../screens/FamilyHomeScreen";

export const FamilyHome = {
  name: 'FamilyHomeScreen' as keyof RootStackParams,
  component: FamilyHomeScreen,
  options: { title: "Familia" },
  initialParams: { initialRouteName: "FamilyHomeScreen" as keyof RootStackParams },
};
