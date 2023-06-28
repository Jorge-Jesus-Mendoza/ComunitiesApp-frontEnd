import React, {useContext, useEffect, useState} from 'react';
import {
  Button,
  Divider,
  Text,
  TextInput,
  RadioButton,
  Snackbar,
} from 'react-native-paper';
import {
  ScrollView,
  View,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import {styles, colors} from '../theme/appTheme';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import DropDownPicker from 'react-native-dropdown-picker';
import {AuthContext} from '../context/AuthContext/index';
import customFetch from '../components/customFetch';
import Alert from '../components/Alert';
import {
  initialRegisterData,
  registerUserItem,
} from '../interfaces/authInterfaces';

export const RegisterScreen = props => {
  const {width, height} = useWindowDimensions();
  const [OpenSelect, setOpenSelect] = useState(false);
  const [Open, setOpen] = useState(false);
  const [OpenAlert, setOpenAlert] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState('');

  const [formValues, setFormValues] = useState(initialRegisterData);

  const {sigIn} = useContext(AuthContext);

  const sexList = [
    {value: 'H', label: 'Hombre'},
    {value: 'M', label: 'Mujer'},
  ];

  const handleChange = (field: string, value: any) => {
    setFormValues((prevFormValues: registerUserItem) => {
      const newFormValues = {
        ...prevFormValues,
        [field]: value,
      };
      return newFormValues;
    });
  };

  const handleSubmit = async () => {
    if (repeatPassword === formValues.password) {
      const DataToSend = async () => {
        const {data} = await customFetch.post('auth/register', formValues);
        return data;
      };
      try {
        await DataToSend().then(createdData => {
          sigIn(createdData);
          setFormValues(initialRegisterData);
          setRepeatPassword('');
          props.navigation.navigate('DashboardScreen');
        });
      } catch (error) {
        if (error.response) {
          const {status, data} = error?.response;
          console.log(
            '🚀 ~ file: RegisterScreen.tsx:59 ~ SendData ~ status, data :',
            status,
            data,
          );
        }
        console.error(error);
      }
    } else {
      setOpenAlert(true);
    }
  };

  const handleConfirm = (date: any) => {
    handleChange('birthdate', date);
    setOpen(!Open);
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
            justifyContent: 'center',
          }}>
          <Image
            source={require('../img/Comuna-o-Nada-scaled-e1654199487274.jpg')}
            style={{
              width: 250,
              height: 125,
              resizeMode: 'contain',
            }}
          />

          <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>
            Registrarse
          </Text>
          <View style={{width: width * 0.8}}>
            <TextInput
              label="Nombre"
              selectionColor="#82d5ff"
              mode="flat"
              value={formValues.name}
              style={{backgroundColor: 'transparent'}}
              onChangeText={value => handleChange('name', value)}
            />
            <TextInput
              label="Apellido"
              selectionColor="#82d5ff"
              mode="flat"
              value={formValues.last_name}
              style={{backgroundColor: 'transparent'}}
              onChangeText={value => handleChange('last_name', value)}
            />
            <TextInput
              label="Cédula"
              selectionColor="#82d5ff"
              mode="flat"
              value={`${formValues.identification_card}`}
              style={{backgroundColor: 'transparent'}}
              onChangeText={value =>
                handleChange('identification_card', Number(value))
              }
            />
            <TouchableOpacity onPress={() => setOpen(true)}>
              <View>
                <TextInput
                  label="Fecha de Nacimiento"
                  selectionColor="red"
                  editable={false}
                  mode="flat"
                  right={<TextInput.Icon icon="calendar" disabled />}
                  activeOutlineColor="red"
                  value={moment(formValues.birthdate).format('DD-MM-YYYY')}
                  style={{backgroundColor: 'transparent'}}
                />
              </View>
            </TouchableOpacity>
            {Open && (
              <DateTimePickerModal
                date={formValues.birthdate}
                isVisible={Open}
                mode="date"
                onConfirm={value => handleConfirm(value)}
                onCancel={() => setOpen(!Open)}
              />
            )}
            <TextInput
              label="Correo"
              selectionColor="#82d5ff"
              mode="flat"
              value={formValues.email}
              style={{backgroundColor: 'transparent'}}
              onChangeText={value => handleChange('email', value)}
            />
            <TextInput
              label="N° de Teléfono"
              selectionColor="#82d5ff"
              mode="flat"
              value={formValues.telephone}
              style={{backgroundColor: 'transparent'}}
              onChangeText={value => handleChange('telephone', value)}
            />
            <View>
              <RadioButton.Group
                onValueChange={value =>
                  handleChange('naturalized', Number(value))
                }
                value={`${formValues.naturalized}`}>
                <RadioButton.Item label="Nacional" value="1" />
                <RadioButton.Item label="Persona Naturalizada" value="2" />
              </RadioButton.Group>
              <Divider style={{backgroundColor: 'grey'}} bold />
            </View>
            <View style={{position: 'relative', margin: 10}}>
              <DropDownPicker
                items={sexList}
                open={OpenSelect}
                setOpen={() => setOpenSelect(!OpenSelect)}
                placeholder="Seleccione su Sexo"
                value={formValues.sex}
                dropDownDirection="TOP"
                onSelectItem={value => handleChange('sex', value.value)}
                setValue={val => console.log(val)}
              />
            </View>
            <Divider style={{backgroundColor: 'grey'}} bold />

            <TextInput
              label="Contraseña"
              selectionColor="#82d5ff"
              mode="flat"
              activeOutlineColor="red"
              secureTextEntry
              value={formValues.password}
              style={{backgroundColor: 'transparent'}}
              onChangeText={value => handleChange('password', value)}
            />

            <TextInput
              label="Repita su contraseña"
              selectionColor="#82d5ff"
              mode="flat"
              activeOutlineColor="red"
              secureTextEntry
              value={repeatPassword}
              style={{backgroundColor: 'transparent'}}
              onChangeText={value => setRepeatPassword(value)}
            />
            <Button
              buttonColor="red"
              textColor="white"
              style={{marginVertical: 10}}
              onPress={() => handleSubmit()}>
              Continuar
            </Button>
            <Alert
              message="Las contraseñas deben ser iguales!"
              onToggleSnackBar={() => setOpenAlert(!OpenAlert)}
              onDismissSnackBar={() => setOpenAlert(false)}
              visible={OpenAlert}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
