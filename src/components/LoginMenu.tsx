/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {Button, IconButton} from 'react-native-paper';
import {styles} from '../theme/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const LoginMenu = props => {
  const {width = {}} = props;

  const containerStyles =
    width <= 600
      ? styles.loginMenuContainerPortrait
      : styles.loginMenuContainerLandscape;

  return (
    <View style={{...containerStyles, width: width * 0.9}}>
      <View
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
          USUARIO / CONTRASEÑA
        </Text>
        {width >= 600 && (
          <>
            <Text
              style={{
                ...styles.loginMenuTextContent,
                color: 'white',
              }}>
              Accede con tu cédula y contraseña. No coloques la contraseña si la
              imagen de seguridad no es correcta.
            </Text>

            <Button
              mode="contained"
              style={styles.showMoreButton}
              textColor="red"
              onPress={() => console.log('Pressed')}>
              <Text>ENTRAR</Text>
            </Button>
          </>
        )}
        {width <= 600 && <IconButton icon="play-circle" iconColor="white" />}
      </View>
      <View
        style={{
          ...styles.loginMenu,
          backgroundColor: 'white',
          width: width >= 600 ? (width * 0.9) / 3 : 'auto',
          flexDirection: width <= 600 ? 'row' : 'column',
          justifyContent: width <= 600 ? 'space-between' : 'space-around',
        }}>
        <Text style={{...styles.loginMenuTitle, color: '#074475'}}>
          RECUPERAR CONTRASEÑA
        </Text>

        {width >= 600 && (
          <>
            <Text style={styles.loginMenuTextContent}>
              Si olvidaste la contraseña puedes recuperarla haciendo uso de
              algún dato de contacto aportado durante el registro o actualizado
              en el perfil.
            </Text>

            <Button
              mode="contained"
              // buttonColor="blue"
              textColor="white"
              onPress={() => console.log('Pressed')}>
              <Text>RECUPERAR</Text>
            </Button>
          </>
        )}
        {width <= 600 && <IconButton icon="play-circle" />}
      </View>
      <View
        style={{
          ...styles.loginMenu,
          backgroundColor: 'white',
          width: width >= 600 ? (width * 0.9) / 3 : 'auto',
          borderTopEndRadius: width >= 600 ? 20 : 0,
          borderBottomStartRadius: width <= 600 ? 20 : 0,
          borderBottomEndRadius: 20,
          flexDirection: width <= 600 ? 'row' : 'column',
          justifyContent: width <= 600 ? 'space-between' : 'space-around',
        }}>
        <Text style={{...styles.loginMenuTitle, color: '#074475'}}>
          RECUPERAR ACCESO
        </Text>

        {width >= 600 && (
          <>
            <Text style={styles.loginMenuTextContent}>
              Si no te es posible acceder al sistema, ni recuperar la
              contraseña, puedes recuperar tu usuario con un teléfono celular
              que sea posible certificar.
            </Text>
            <Button
              mode="contained"
              // buttonColor="blue"
              textColor="white"
              onPress={() => console.log('Pressed')}>
              <Text>RECUPERAR</Text>
            </Button>
          </>
        )}
        {width <= 600 && <IconButton icon="play-circle" />}
      </View>
    </View>
  );
};
