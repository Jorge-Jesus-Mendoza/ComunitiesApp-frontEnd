import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import React, { useContext, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Divider, Drawer } from 'react-native-paper';
import { AuthContext } from '../context/AuthContext';

export const InternalMenuStyled = ({ navigation, state, ...props }: DrawerContentComponentProps) => {

  const {authState, logOut} = useContext(AuthContext);
  // const routeName = useNavigationState(state => state.routes[state.index].name);
  console.log(JSON.stringify(state, null, 4));
  const [active, setActive] = useState('');

  function LoggedInMenu() {
    const { authState, logOut } = useContext(AuthContext);
    const { routes, index } = state;
    const TopTabNavigatorScreenIndex: number = routes[0].state?.index ?? -1;
    const TopTabNavigatorScreenName = routes[0].state?.routeNames?.[TopTabNavigatorScreenIndex];
    console.log("TopTabNavigatorScreenName", TopTabNavigatorScreenName);
    const handleLogOut = () => {
      logOut();
      navigation.navigate('HomeScreen');
    };
    switch (TopTabNavigatorScreenName) {
      case 'Dashboard':
        return (
          <>
            <View
              style={{
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Image
                source={{
                  uri: 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif',
                }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                }}
              />
              <Text style={{ marginTop: 10 }}>
                {authState.userName} {authState.lastName}
              </Text>
            </View>
            {/* <Drawer.Section title="Some title"> */}
            <Drawer.Item
              icon="logout"
              label="Cerrar Sesión"
              // active={active === 'HomeScreen'}
              onPress={() => handleLogOut()}
              style={{ height: 40, marginTop: 30 }}
            />
            <Divider style={{ height: 2, marginTop: 20 }} />
          </>
        );
      case "FamilyScreen":
        return (
          <>
            <View
              style={{
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Image
                source={{
                  uri: 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif',
                }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                }}
              />
              <Text style={{ marginTop: 10 }}>
                {authState.userName} {authState.lastName}
              </Text>
            </View>
            {/* <Drawer.Section title="Some title"> */}
            <Drawer.Item
              icon="account-group"
              label="Familia"
              active={true}
              onPress={() => navigation.navigate(TopTabNavigatorScreenName)}
              style={{ height: 40, marginTop: 50 }}
            />
            <Drawer.Item
              icon="logout"
              label="Cerrar Sesión Pantalla Familia"
              // active={active === 'HomeScreen'}
              onPress={() => handleLogOut()}
              style={{ height: 40, marginTop: 30 }}
            />
            <Divider style={{ height: 2, marginTop: 20 }} />
          </>
        );

    }
    return (
      <>
        <View
          style={{
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Image
            source={{
              uri: 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif',
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
            }}
          />
          <Text style={{ marginTop: 10 }}>
            {authState.userName} {authState.lastName}
          </Text>
        </View>
        {/* <Drawer.Section title="Some title"> */}
        <Drawer.Item
          icon="logout"
          label="Cerrar Sesión"
          // active={active === 'HomeScreen'}
          onPress={() => handleLogOut()}
          style={{ height: 40, marginTop: 30 }}
        />
        <Divider style={{ height: 2, marginTop: 20 }} />
      </>
    );

  }


  // console.log("TopTabNavigatorScreenName", TopTabNavigatorScreenName);

  // const activeRoute = routes.routeNames;
  // console.log("activeRoute", activeRoute);
  return (
    <DrawerContentScrollView>
      {
        !authState.isLoggedIn &&
        <>
          <Drawer.Item
            icon="home"
            label="Inicio"
            active={active === 'HomeScreen'}
            onPress={() => navigation.navigate('HomeScreen')}
            style={{ height: 40, marginTop: 50 }}
          />
          <Drawer.Item
            icon="login"
            label="Iniciar Sesión"
            active={active === 'LoginScreen'}
            onPress={() => navigation.navigate('LoginScreen')}
            style={{ height: 40, marginVertical: 10 }}
          />
          <Drawer.Item
            icon="clipboard-edit-outline"
            label="Registrarse"
            active={active === 'RegisterScreen'}
            onPress={() => navigation.navigate('RegisterScreen')}
            style={{ height: 40, marginVertical: 10 }}
          />
          <Divider style={{ height: 2, marginTop: 20 }} />
        </> || <LoggedInMenu />
      }
    </DrawerContentScrollView>
  );
};
