import { DrawerScreenProps } from '@react-navigation/drawer';
import { useFormik } from 'formik';
import moment from 'moment';
import React, { useContext, useState } from 'react';
import {
  Image,
  ScrollView,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  Button,
  Divider,
  RadioButton,
  Text,
  TextInput,
} from 'react-native-paper';
import communityApi from '../api/communityApi';
import Alert from '../components/Alert';
import { TextField } from '../components/TextField';
import { AuthContext } from '../context/AuthContext/index';
import {
  initialRegisterData
} from '../interfaces/authInterfaces';
import { RootDrawerParams } from '../navigator/DrawerNavigator';
import { styles } from '../theme/appTheme';
interface Props extends DrawerScreenProps<RootDrawerParams, "RegisterScreen"> { }
export const RegisterScreen = ({ navigation }: Props) => {
  const {width, height} = useWindowDimensions();
  const [OpenSelect, setOpenSelect] = useState(false);
  const [Open, setOpen] = useState(false);
  const [OpenAlert, setOpenAlert] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState('');
  const [Message, setMessage] = useState('');

  const {sigIn} = useContext(AuthContext);

  const {values, setFieldValue, handleSubmit, errors, isSubmitting, resetForm} =
    useFormik({
      initialValues: initialRegisterData,

      onSubmit(values, formikHelpers) {
        if (repeatPassword === values.password) {
          console.log(values);
          communityApi
            .post('/auth/register', values)
            .then(response => {
              sigIn(response.data);
              resetForm();
              setRepeatPassword('');
              navigation.navigate('TopTabNavigator');
            })
            .catch(error => {
              if (error.response) {
                const {status, data} = error?.response;
                console.log(
                  '🚀 ~ file: RegisterScreen.tsx:59 ~ SendData ~ status, data :',
                  status,
                  data,
                );
                if (Array.isArray(data.message)) {
                  setMessage(
                    `${data.message.map((text: string) => `${text}${'\n'}`)}`,
                  );
                } else {
                  setMessage(data.message);
                }
                setOpenAlert(true);
              }
              console.error(error);
            });
        } else {
          setMessage('¡Las contraseñas deben ser iguales!');
          setOpenAlert(true);
        }
      },
      validate(values) {
        const errors: any = {};

        const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        const pass =
          /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;

        if (!Number.isInteger(values.identification_card)) {
          errors.identification_card = 'Ingrese un número de cédula valido';
        }
        if (!values.email.match(validateEmail)) {
          errors.email = 'Ingrese un correo valido';
        }
        if (!values.password.match(pass)) {
          errors.password = 'Ingrese una contraseña valida';
        }
        return errors;
      },
    });

  const sexList = [
    {value: 'H', label: 'Hombre'},
    {value: 'M', label: 'Mujer'},
    { value: null, label: '-- Seleccione su sexo --' },
  ];

  const hideDatePicker = () => {
    setOpen(false);
  };

  const handleConfirm = (date: any) => {
    setFieldValue('birthdate', date);
    hideDatePicker();
  };

  const isFormValid =
    Object.keys(errors).length === 0;

  console.log(isFormValid, '\nerrors', errors)
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
            <TextField
              label="Nombre"
              value={values.name}
              onChangeText={(value: any) => setFieldValue('name', value)}
              error={Boolean(errors?.name)}
              errorTitle={errors?.name}
            />
            <TextField
              label="Apellido"
              value={values.last_name}
              onChangeText={(value: any) => setFieldValue('last_name', value)}
              error={Boolean(errors?.last_name)}
              errorTitle={errors?.last_name}
            />

            <TextField
              label="Cédula"
              value={values.identification_card}
              onChangeText={(value: any) =>
                setFieldValue('identification_card', Number(value))
              }
              error={Boolean(errors?.identification_card)}
              errorTitle={errors?.identification_card}
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
                  value={moment(values.birthdate).format('DD-MM-YYYY')}
                  style={{backgroundColor: 'transparent'}}
                />
              </View>
            </TouchableOpacity>

            <DateTimePickerModal
              date={values.birthdate}
              isVisible={Open}
              mode="date"
              onConfirm={value => handleConfirm(value)}
              onCancel={() => hideDatePicker()}
            />

            <TextField
              label="Correo"
              value={values.email}
              onChangeText={(value: any) => setFieldValue('email', value)}
              error={Boolean(errors?.email)}
              errorTitle={errors?.email}
            />

            <TextField
              label="N° de Teléfono"
              value={values.telephone}
              onChangeText={(value: any) => setFieldValue('telephone', value)}
              error={Boolean(errors?.telephone)}
              errorTitle={errors?.telephone}
            />

            <View>
              <RadioButton.Group
                onValueChange={value =>
                  setFieldValue('naturalized', value)
                }
                value={`${values.naturalized}`}>
                <RadioButton.Item label="Nacional" value="V" />
                <RadioButton.Item label="Persona Naturalizada" value="E" />
              </RadioButton.Group>
              <Divider style={{backgroundColor: 'grey'}} bold />
            </View>

            <View style={{position: 'relative', margin: 10}}>
              <DropDownPicker
                items={sexList}
                open={OpenSelect}
                setOpen={() => setOpenSelect(!OpenSelect)}
                placeholder="Seleccione su Sexo"
                value={values.sex}
                dropDownDirection="TOP"
                onSelectItem={value => setFieldValue('sex', value.value)}
                setValue={val => console.log(val)}
              />
            </View>
            <Divider style={{backgroundColor: 'grey'}} bold />

            <TextField
              label="Contraseña"
              value={values.password}
              secureTextEntry
              onChangeText={(value: any) => setFieldValue('password', value)}
              error={Boolean(errors?.password)}
              errorTitle={errors?.password}
            />

            <TextField
              label="Repita su contraseña"
              value={repeatPassword}
              secureTextEntry
              onChangeText={(value: any) => setRepeatPassword(value)}
              // error={Boolean(errors?.password)}
            />
            <Button
              buttonColor={isFormValid ? 'red' : 'grey'}
              textColor="white"
              style={{marginVertical: 10}}
              disabled={!isFormValid}
              onPress={handleSubmit}>
              Continuar
            </Button>

            <Alert
              message={Message}
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
