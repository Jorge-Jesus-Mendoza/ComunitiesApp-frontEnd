import React, {useContext, useState} from 'react';
import {Image, ScrollView, View, useWindowDimensions} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import communityApi from '../api/communityApi';
import {AuthContext} from '../context/AuthContext';
import {initialLoginData, loginItem} from '../interfaces/authInterfaces';
import {styles, colors} from '../theme/appTheme';
import {useFormik} from 'formik';
import {TextField} from '../components/TextField';

export const LoginScreen = (props: any) => {
  const {width} = useWindowDimensions();

  const {logIn} = useContext(AuthContext);
  const [Message, setMessage] = useState('');

  const {values, setFieldValue, handleSubmit, errors, isSubmitting, resetForm} =
    useFormik({
      initialValues: initialLoginData,

      onSubmit(values, formikHelpers) {
        console.log(values);
        communityApi
          .post('/auth/login', values)
          .then(response => {
            logIn(response.data);
            resetForm();
            props.navigation.navigate('TobTabNavigator');
          })
          .catch(error => {
            if (error.response) {
              const {status, data} = error?.response;
              console.log(
                '🚀 ~ file: RegisterScreen.tsx:59 ~ SendData ~ status, data :',
                status,
                data,
              );
            }
            console.error(error);
          });
      },
      validate(values) {
        const errors: any = {};
        const paswd =
          /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
        if (!Number.isInteger(values.identification_card)) {
          errors.identification_card = 'Ingrese un número de cédula valido';
        }
        if (values.password !== '') {
          if (!values.password.match(paswd)) {
            errors.password = 'Ingrese una contraseña valida';
          }
        }
        return errors;
      },
    });

  console.log(Array.isArray(''));

  const isFormValid = errors?.identification_card || errors?.password;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            padding: 20,
            alignItems: 'center',
            marginVertical: 15,
            borderRadius: 20,
          }}>
          <Image
            source={require('../img/Comuna-o-Nada-scaled-e1654199487274.jpg')}
            style={{
              width: 250,
              height: 125,
              resizeMode: 'contain',
            }}
          />
          <View style={{width: width * 0.8}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                textAlign: 'center',
              }}>
              Iniciar Sesión
            </Text>

            <TextField
              label="Cédula"
              value={values.identification_card}
              onChangeText={(value: any) =>
                setFieldValue('identification_card', Number(value))
              }
              error={errors?.identification_card}
            />

            <TextField
              label="Clave"
              value={values.password}
              secureTextEntry
              onChangeText={(value: any) => setFieldValue('password', value)}
              error={errors?.password}
            />
            <Button
              buttonColor={!isFormValid ? 'red' : 'grey'}
              textColor="white"
              style={{marginVertical: 10}}
              onPress={!isFormValid ? () => handleSubmit() : () => {}}>
              Continuar
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
