import {DrawerContentScrollView} from '@react-navigation/drawer';
import {useRoute} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {Divider, Drawer, Text} from 'react-native-paper';
import {AuthContext} from '../context/AuthContext';
import {Image, View} from 'react-native';

export const InternalMenuStyled = props => {
  const {authState, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
    props.navigation.navigate('HomeScreen');
  };

  const [active, setActive] = useState('');

  return (
    (!authState.isLoggedIn && (
      <DrawerContentScrollView>
        {/* <Drawer.Section title="Some title"> */}
        <Drawer.Item
          icon="home"
          label="Inicio"
          active={active === 'HomeScreen'}
          onPress={() => props.navigation.navigate('HomeScreen')}
          style={{height: 40, marginTop: 50}}
        />
        <Drawer.Item
          icon="login"
          label="Iniciar Sesión"
          active={active === 'LoginScreen'}
          onPress={() => props.navigation.navigate('LoginScreen')}
          style={{height: 40, marginVertical: 10}}
        />
        <Drawer.Item
          icon="clipboard-edit-outline"
          label="Registrarse"
          active={active === 'RegisterScreen'}
          onPress={() => props.navigation.navigate('RegisterScreen')}
          style={{height: 40, marginVertical: 10}}
        />
        <Divider style={{height: 2, marginTop: 20}} />
        {/* </Drawer.Section> */}
      </DrawerContentScrollView>
    )) || (
      <DrawerContentScrollView>
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
              width: 150,
              height: 150,
              borderRadius: 100,
            }}
          />
          <Text style={{marginTop: 10}}>
            {authState.userName} {authState.lastName}
          </Text>
        </View>
        {/* <Drawer.Section title="Some title"> */}
        <Drawer.Item
          icon="logout"
          label="Cerrar Sesión"
          // active={active === 'HomeScreen'}
          onPress={() => handleLogOut()}
          style={{height: 40, marginTop: 30}}
        />
        <Divider style={{height: 2, marginTop: 20}} />
        {/* </Drawer.Section> */}
      </DrawerContentScrollView>
    )
  );
};
