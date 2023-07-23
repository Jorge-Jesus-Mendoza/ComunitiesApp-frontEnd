import { Formik } from 'formik';
import moment from 'moment';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Button, Card, RadioButton, Text, TextInput } from 'react-native-paper';
import DataGrid from '../components/DataTable';
import { TextField } from '../components/TextField';
import useDropdown from '../hooks/useDropDown';
import { colors } from '../theme/appTheme';

const Nationality = [
  {
    label: 'E',
    value: 'E'
  },
  {
    label: 'V',
    value: 'V'
  },
];
const identityCard = [
  {
    label: "Cedulado",
    value: true
  },
  {
    label: 'No Cedulado',
    value: false
  },
];
const FamilyHomeScreen = () => {
  const { isOpen, toggleOpen } = useDropdown(false);
  const { isOpen: isOpen2, toggleOpen: toggleOpen2 } = useDropdown(false);
  const { isOpen: isOpen3, toggleOpen: toggleOpen3 } = useDropdown(false);

  return (
    <ScrollView>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        margin: 16,
      }}>

        <Button
          style={{
            backgroundColor: colors.primary,
            // padding: ,
            width: 100,
            borderRadius: 16,
          }}
          labelStyle={{
            color: 'white',
            fontSize: 16,
          }}
        >ok</Button>
      </View>
      <Card style={{
        margin: 16,
        backgroundColor: "white",
      }}>

        <Card.Content>
          <Formik
            initialValues={{ name: '', last_name: '', birthdate: new Date(Date.now()), identification_card: '', nationality: '', sex: '', telephone: '', email: '', identity_card: true, son_number: 1 }}
            onSubmit={values => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldValue }) => {
              const edad = moment().diff(values.birthdate, 'years');
              const under9YearsOld = edad < 9;
              return (
                <>
                  <View style={{
                    marginVertical: 10,
                  }}>
                    <TouchableOpacity onPress={toggleOpen2}>
                      <View>
                        <TextField
                          placeholder='Ej: DD-MM-YYYY'
                          autoComplete='birthdate-full'
                          label="Fecha de Nacimiento"
                          value={moment(values.birthdate).format('DD-MM-YYYY')}
                          error={Boolean(errors.birthdate)}
                          right={<TextInput.Icon icon="calendar" disabled />}
                          errorTitle={errors.birthdate}
                          editable={false}
                        />
                      </View>
                    </TouchableOpacity>
                    <DateTimePickerModal
                      date={values.birthdate}
                      isVisible={isOpen2}
                      mode="date"
                      onConfirm={value => {
                        toggleOpen2();
                        setFieldValue('birthdate', value);
                      }}
                      onCancel={toggleOpen2}
                      locale='es'
                    />
                  </View>
                  <View style={{
                    flexDirection: 'row',
                  }}>

                    <View style={{
                      marginLeft: 15,
                    }}>
                      <Text variant='labelSmall'>Cedulado</Text>
                      <DropDownPicker
                        setValue={() => setFieldValue('identity_card', !under9YearsOld)}
                        items={identityCard}
                        open={isOpen3}
                        setOpen={toggleOpen3}
                        value={under9YearsOld ? false : values.identity_card}
                        dropDownDirection="TOP"
                        onSelectItem={({ value }) => setFieldValue('identity_card', under9YearsOld ? false : value)}
                        placeholder=''
                        labelStyle={{
                          fontSize: 16,
                          color: 'black',
                          fontWeight: 'bold',
                        }}
                        style={{
                          width: 150,
                        }}
                        dropDownContainerStyle={{
                          width: 150,
                        }}
                      />
                    </View>
                    <View style={{
                      marginLeft: 15,
                    }}>
                      <Text variant='labelSmall'>Nacionalidad</Text>
                      <DropDownPicker
                        setValue={() => { }}
                        items={Nationality}
                        open={isOpen}
                        setOpen={toggleOpen}
                        value={values.nationality}
                        dropDownDirection="TOP"
                        onSelectItem={({ value }) => setFieldValue('nationality', value)}
                        placeholder=''
                        labelStyle={{
                          fontSize: 16,
                          color: 'black',
                          fontWeight: 'bold',
                        }}
                        style={{
                          width: 65,
                        }}
                        dropDownContainerStyle={{
                          width: 65,
                        }}
                      />
                    </View>
                  </View>
                  <TextField
                    placeholder='Ej: Juan Pedro'
                    label="Nombre/s"
                    value={values.name}
                    onChangeText={handleChange('name')}
                    error={Boolean(errors.name)}
                    errorTitle={errors.name}
                  />
                  <TextField
                    placeholder='Ej: Alvarado Pérez'
                    label="Apellido/s"
                    value={values.last_name}
                    onChangeText={handleChange('last_name')}
                    error={Boolean(errors.last_name)}
                    errorTitle={errors.last_name}
                  />
                  <TextField
                    placeholder='Ej: example@mail.com'
                    label="Correo Electrónico"
                    inputMode='email'
                    autoComplete='email'
                    keyboardType='email-address'
                    value={values.email}
                    onChangeText={handleChange('email')}
                    error={Boolean(errors.email)}
                    errorTitle={errors.email}
                  />
                  <View
                    style={{
                      marginTop: 16,
                      flexDirection: 'column',
                      justifyContent: 'space-evenly',
                      alignSelf: 'flex-start',
                    }}
                  >
                    <Text variant='labelLarge' style={{ marginLeft: 15 }}>Sexo</Text>
                    <RadioButton.Group

                      onValueChange={value => setFieldValue('sex', value)}
                      value={`${values.sex}`}>
                      <RadioButton.Item label="Masculino" value="M" />
                      <RadioButton.Item label="Femenino" value="F" />
                    </RadioButton.Group>
                  </View>


                  <TextField
                    placeholder='Ej: 00000000'
                    inputMode='numeric'
                    label={`Documento de identidad${!values.identity_card ? ' del Representante' : ''}`}
                    value={values.identification_card}
                    onChangeText={handleChange('identification_card')}
                    error={Boolean(errors.identification_card)}
                    errorTitle={errors.identification_card}
                  />
                  {!values.identity_card &&
                    <TextField
                      placeholder='Ej: 1'
                      inputMode='numeric'
                      underlineStyle={{ width: "75%" }}
                      containerStyle={{ width: "50%" }}
                      style={{
                        width: 346,
                      }}
                      label="Número del Hijo"
                      value={values.son_number.toString()}
                      onChangeText={handleChange('son_number')}
                      error={Boolean(errors.son_number)}
                      errorTitle={errors.son_number}
                    />
                  }

                <TextField
                  inputMode='tel'
                  autoComplete='tel'
                  placeholder="Ej: +(Código de area) 000-0000000)"
                  label="Numero de Teléfono"
                  value={values.telephone}
                  onChangeText={handleChange('telephone')}
                  error={Boolean(errors.telephone)}
                  errorTitle={errors.telephone}
                />



                <Button onPress={handleSubmit} style={{
                  marginTop: 16,
                  backgroundColor: colors.primary,
                  borderRadius: 16,

                }}
                  labelStyle={{
                    color: 'white',
                    fontSize: 16,
                  }}

                >Agregar</Button>
                <Text>
                  {console.log('values', JSON.stringify(values, null, 2), '\nerrors', JSON.stringify(errors, null, 2))}
                </Text>
                </>
              );
            }}

          </Formik>
        </Card.Content>
      </Card>
      <Card
        style={{
          margin: 16,
          backgroundColor: "white",
        }}
      >
        <Card.Content>
          <Text variant='headlineSmall'>Card content</Text>
          <DataGrid />
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default FamilyHomeScreen;