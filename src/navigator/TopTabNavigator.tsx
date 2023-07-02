import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { Dashboard } from "../routes";
import { colors } from "../theme/appTheme";

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
  const { top: paddingTop } = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      style={{ paddingTop }}
      sceneContainerStyle={{
        backgroundColor: "white",
      }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'blue',
        tabBarPressColor: 'rgba(226, 25, 26, 0.2)',
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
        tabBarStyle: {
          shadowColor: "red",
          elevation: 0,
          backgroundColor: colors.primary,
        },
        tabBarLabelStyle: {
          fontSize: 0,
        },
        // tabBarItemStyle: { width: 100 },
        tabBarIcon: ({ color, focused }) => {
          let iconName: string = "";
          switch (route.name) {
            case "Dashboard":
              iconName = "home";
              break;
            case "SecondScreen":
              iconName = "people";
              break;
            case "ThirdScreen":
              iconName = "wallet";
              break;
            default:
              iconName = "ban-outline";
              break;
          }

          return <View style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <View style={{
              width: 60,
              height: "145%",
              alignItems: 'center',
              justifyContent: 'center',
              padding: 5,
              backgroundColor: focused ? "#AF0000" : colors.primary,
              borderBottomEndRadius: 5,
              borderBottomStartRadius: 5,
              borderTopEndRadius: 5,
              borderTopStartRadius: 5,
            }}>

              <Icon name={iconName} size={25} color="white" />
            </View>

          </View>;
        },
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={() => <Dashboard.component />}
      />
      <Tab.Screen
        name="SecondScreen"
        options={{ title: "Contacts" }}
        component={() => <View>
          <Text>second screen</Text>
        </View>}
      />
      <Tab.Screen
        name="ThirdScreen"
        options={{ title: "Albums" }}
        component={() => <View>
          <Text>third Screen</Text>
        </View>}
      />
    </Tab.Navigator >
  );
}
