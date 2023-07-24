import { Formik } from 'formik';
import { ScrollView, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Button, Card, RadioButton, Text } from 'react-native-paper';
import DataGrid from '../components/DataTable';
import DatePicker from '../components/DatePicker';
import { TextField } from '../components/TextField';
import { Nationality, exampleColumns, exampleRows, familyInitialValues, identityCard } from '../data';
import { compareDateWithNumber } from '../helpers';
import useDropdown from '../hooks/useDropDown';
import { Person } from '../interfaces/FamilyHomeInterfaces';
import { colors } from '../theme/appTheme';

const FamilyHomeScreen = () => {
  const { isOpen, toggleOpen } = useDropdown(false);
  const { isOpen: isOpen3, toggleOpen: toggleOpen3 } = useDropdown(false);

  return (
    <ScrollView>
      <Card style={{
        margin: 16,
        backgroundColor: "white",
      }}>
        <Formik
          initialValues={familyInitialValues}
          onSubmit={values => console.log(JSON.stringify(values, null, 2))}
          >
          {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldValue, resetForm, setValues }) => {

            const isUnder9YearsOld = compareDateWithNumber(values.birthdate, 9, '<');
            console.log(JSON.stringify(values, null, 2));
              return (
                <>
                  <Card.Content>
                    <DatePicker
                      errorTitle={errors.birthdate}
                      error={Boolean(errors.birthdate)}
                      date={values.birthdate}
                      label="Fecha de Nacimiento"
                      DatePickerProps={{
                        onConfirm: value => {
                          if (compareDateWithNumber(value, 9, '<'))
                            setFieldValue('identity_card', false);

                          setFieldValue('birthdate', value);
                        },
                        onCancel: () => { },
                      }}
                    />

                  <View style={{
                    flexDirection: 'row',
                  }}>

                      {!isUnder9YearsOld && <View style={{
                      marginLeft: 15,
                    }}>
                      <Text variant='labelSmall'>Cedulado</Text>
                      <DropDownPicker
                          setValue={() => { }}
                        items={identityCard}
                        open={isOpen3}
                        setOpen={toggleOpen3}
                          value={values.identity_card}
                        dropDownDirection="TOP"
                          onSelectItem={({ value }) => setFieldValue('identity_card', value)}
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
                      </View>}
                    <View style={{
                      marginLeft: 15,
                    }}>
                      <Text variant='labelSmall'>Nacionalidad</Text>
                      <DropDownPicker
                        setValue={() => { }}
                        items={Nationality}
                        open={isOpen}
                        setOpen={toggleOpen}
                          value={values.naturalized}
                        dropDownDirection="TOP"
                          onSelectItem={({ value }) => setFieldValue('naturalized', value)}
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
                      label={`Documento de identidad${!values.identity_card && isUnder9YearsOld ? ' del Representante' : ''}`}
                      value={values.identification_card.toString()}
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



                    <Button
                      onPress={() => {
                        const newPersons: Person[] = values.persons?.length ? [...values.persons] : [];
                        const newValues = {
                          id: newPersons.length + 1,
                          ...values
                        };
                        if (newValues?.persons !== undefined)
                          delete newValues?.persons;
                        newPersons.push(newValues);
                        setValues({
                          ...familyInitialValues,
                          persons: newPersons,
                        });
                        // resetForm();
                      }}
                      style={{
                        marginTop: 16,
                        backgroundColor: colors.primary,
                        borderRadius: 16,
                        width: "30%",
                        alignSelf: 'flex-end',
                      }}
                      labelStyle={{
                        color: 'white',
                        fontSize: 16,
                      }}
                    >
                      Agregar
                    </Button>
                    <DataGrid rows={exampleRows} columns={exampleColumns} />
                  </Card.Content>
                  <Card.Actions>
                    <Button onPress={handleSubmit} style={{
                      marginTop: 16,
                      backgroundColor: colors.primary,
                      borderRadius: 16,
                      flex: 1,
                      alignSelf: 'center'
                    }}
                      labelStyle={{
                        color: 'white',
                        fontSize: 16,
                      }}

                    >Enviar Datos del Núcleo Familiar</Button>

                  </Card.Actions>
                </>
              );
          }}
        </Formik>
      </Card>
    </ScrollView>
  );
};

export default FamilyHomeScreen;