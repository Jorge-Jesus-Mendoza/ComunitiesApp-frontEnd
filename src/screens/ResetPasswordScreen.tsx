import {DrawerScreenProps} from '@react-navigation/drawer';
import {useFormik} from 'formik';
import React, {useContext, useEffect, useState} from 'react';
import {Image, ScrollView, View, useWindowDimensions} from 'react-native';
import {Button, Text} from 'react-native-paper';
import communityApi from '../api/communityApi';
import {TextField} from '../components/TextField';
import {AuthContext} from '../context/AuthContext';
import {initialLoginData} from '../interfaces/authInterfaces';
import {RootDrawerParams} from '../navigator/DrawerNavigator';
import {styles} from '../theme/appTheme';
interface Props
  extends DrawerScreenProps<RootDrawerParams, 'ResetPasswordScreen'> {}

export const ResetPasswordScreen = ({navigation}: Props) => {
  const {width} = useWindowDimensions();
  const [Message, setMessage] = useState('');

  const {values, setFieldValue, handleSubmit, errors, isSubmitting, resetForm} =
    useFormik({
      initialValues: initialLoginData,

      onSubmit(values, formikHelpers) {
        console.log(values);
      },
      validate(values) {
        const errors: any = {};
        const pass =
          /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
        if (!Number.isInteger(values.identification_card)) {
          errors.identification_card = 'Ingrese un número de cédula valido';
        }
        return errors;
      },
    });

  const isFormValid = errors?.identification_card;

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
          <View style={{width: width * 0.8}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                textAlign: 'center',
              }}>
              Recuperar Contraseña
            </Text>

            <TextField
              label="Cédula"
              value={values.identification_card}
              onChangeText={(value: any) =>
                setFieldValue('identification_card', Number(value))
              }
              error={errors?.identification_card}
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
