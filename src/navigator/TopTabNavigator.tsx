import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {Route} from '../interfaces/routesInterfaces';
import {Dashboard, Family} from '../routes';
import {colors} from '../theme/appTheme';

export type RootTopTabParams = {
  DashboardScreen: undefined;
  FamilyScreen: undefined;
  ProgramsScreen: undefined;
  ReportScreen: undefined;
};
const Tab = createMaterialTopTabNavigator<RootTopTabParams>();
const RoutesList: Route[] = [Dashboard, Family];

export default function TopTabNavigator() {
  const {top: paddingTop} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="DashboardScreen"
      style={{paddingTop}}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarScrollEnabled: true,
        tabBarActiveTintColor: 'blue',
        tabBarPressColor: 'rgba(226, 25, 26, 0.2)',
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
        tabBarStyle: {
          shadowColor: 'red',
          elevation: 0,
          backgroundColor: colors.primary,
        },
        tabBarLabelStyle: {
          marginTop: 10,
          fontSize: 15,
          fontWeight: 'bold',
          textTransform: 'capitalize',
          color: 'white',
        },
        // tabBarItemStyle: { width: 100 },
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'DashboardScreen':
              iconName = 'home';
              break;
            case 'FamilyScreen':
              iconName = 'people';
              break;
            case 'ProgramsScreen':
              iconName = 'desktop';
              break;
            case 'ReportScreen':
              iconName = 'document-text';
              break;
            default:
              iconName = 'ban-outline';
              break;
          }

          return (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: 60,
                  height: '145%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 5,
                  backgroundColor: focused ? '#AF0000' : colors.primary,
                  borderBottomEndRadius: 5,
                  borderBottomStartRadius: 5,
                  borderTopEndRadius: 5,
                  borderTopStartRadius: 5,
                }}>
                <Icon name={iconName} size={25} color="white" />
              </View>
            </View>
          );
        },
      })}>
      {RoutesList.map(({name, component, options, initialParams}, index) => (
        <Tab.Screen
          key={name + index}
          name={name as keyof RootTopTabParams}
          options={options}
          component={component}
          initialParams={initialParams as any}
        />
      ))}
      <Tab.Screen
        name="ProgramsScreen"
        options={{title: 'Programas'}}
        component={() => (
          <View>
            <Text>third Screen</Text>
          </View>
        )}
      />
      <Tab.Screen
        name="ReportScreen"
        options={{title: 'Reportes'}}
        component={() => (
          <View>
            <Text>third Screen</Text>
          </View>
        )}
      />
    </Tab.Navigator>
  );
}
