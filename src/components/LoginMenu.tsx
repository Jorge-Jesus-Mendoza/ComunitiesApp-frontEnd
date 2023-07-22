/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Button, IconButton} from 'react-native-paper';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {RootDrawerParams} from '../navigator/DrawerNavigator';
import {styles} from '../theme/appTheme';

interface navigationProps
  extends DrawerScreenProps<RootDrawerParams, 'HomeScreen'> {}
type Props = {
  navigation: navigationProps;
  width: number;
};
export const LoginMenu = (props: Props) => {
  const {width = 0} = props;
  const navigator = props.navigation.navigation;

  const containerStyles =
    width <= 600
      ? styles.loginMenuContainerPortrait
      : styles.loginMenuContainerLandscape;

  return (
    <View style={{...containerStyles, width: width * 0.9}}>
      <TouchableOpacity
        disabled={width >= 600}
        activeOpacity={1}
        onPress={() => navigator.navigate('LoginScreen')}
        style={{
          ...styles.loginMenu,
          backgroundColor: 'red',
          width: width >= 600 ? (width * 0.9) / 3 : 'auto',
          borderTopStartRadius: 20,
          flexDirection: width <= 600 ? 'row' : 'column',
          justifyContent: width <= 600 ? 'space-between' : 'space-around',
          borderTopEndRadius: width <= 600 ? 20 : 0,
          borderBottomStartRadius: width >= 600 ? 20 : 0,
        }}>
        <Text style={{...styles.loginMenuTitle, color: 'white'}}>
          INICIAR SESIÓN
        </Text>
        {width >= 600 && (
          <>
            <Text
              style={{
                ...styles.loginMenuTextContent,
                color: 'white',
              }}>
              Accede con tu cédula y contraseña.
            </Text>

            <Button
              mode="contained"
              style={styles.showMoreButton}
              textColor="red"
              onPress={() => navigator.navigate('LoginScreen')}>
              <Text>ENTRAR</Text>
            </Button>
          </>
        )}
        {width <= 600 && <IconButton icon="play-circle" iconColor="white" />}
      </TouchableOpacity>
      <TouchableOpacity
        disabled={width >= 600}
        activeOpacity={1}
        onPress={() => navigator.navigate('ResetPasswordScreen')}
        style={{
          ...styles.loginMenu,
          backgroundColor: 'white',
          width: width >= 600 ? (width * 0.9) / 3 : 'auto',
          flexDirection: width <= 600 ? 'row' : 'column',
          justifyContent: width <= 600 ? 'space-between' : 'space-around',
          borderTopEndRadius: width >= 600 ? 20 : 0,
          borderBottomStartRadius: width <= 600 ? 20 : 0,
          borderBottomEndRadius: 20,
        }}>
        <Text style={{...styles.loginMenuTitle, color: '#074475'}}>
          RECUPERAR CONTRASEÑA
        </Text>

        {width >= 600 && (
          <>
            <Text style={styles.loginMenuTextContent}>
              Si olvidaste tu contraseña puedes solicitar su reinicio a uno de
              los administradores
            </Text>

            <Button
              mode="contained"
              // buttonColor="blue"
              textColor="white"
              onPress={() => navigator.navigate('ResetPasswordScreen')}>
              <Text>RECUPERAR</Text>
            </Button>
          </>
        )}
        {width <= 600 && <IconButton icon="play-circle" />}
      </TouchableOpacity>
    </View>
  );
};
