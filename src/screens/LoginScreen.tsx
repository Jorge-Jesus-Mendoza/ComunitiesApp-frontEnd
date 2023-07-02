import React, { useContext, useState } from 'react';
import { Image, ScrollView, View, useWindowDimensions } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import communityApi from '../api/communityApi';
import { AuthContext } from '../context/AuthContext';
import { initialLoginData, loginItem } from '../interfaces/authInterfaces';
import { styles } from '../theme/appTheme';

export const LoginScreen = props => {
  const {width, height} = useWindowDimensions();

  const {logIn} = useContext(AuthContext);

  const [formValues, setFormValues] = useState(initialLoginData);

  const handleChange = (field: string, value: string | number) => {
    setFormValues((prevFormValues: loginItem) => {
      const newFormValues = {
        ...prevFormValues,
        [field]: value,
      };
      return newFormValues;
    });
  };

  const handleSubmit = () => {
    communityApi
      .post('/auth/login', formValues)
      .then(response => {
        logIn(response.data);
        setFormValues(initialLoginData);
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
  };
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
              style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>
              Iniciar Sesión
            </Text>
            <TextInput
              label="Cédula"
              selectionColor="#82d5ff"
              mode="flat"
              value={formValues.identification_card}
              style={{backgroundColor: 'transparent'}}
              onChangeText={value =>
                handleChange('identification_card', Number(value))
              }
            />
            <TextInput
              label="Clave"
              selectionColor="#82d5ff"
              mode="flat"
              activeOutlineColor="red"
              secureTextEntry
              value={formValues.password}
              style={{backgroundColor: 'transparent'}}
              onChangeText={value => handleChange('password', value)}
            />
            <Button
              buttonColor="red"
              textColor="white"
              style={{marginVertical: 10}}
              onPress={() => handleSubmit()}>
              Continuar
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
