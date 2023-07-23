import { Formik } from 'formik';
import { ScrollView, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Button, Card, RadioButton, Text } from 'react-native-paper';
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
const FamilyHomeScreen = () => {
  const { isOpen, toggleOpen } = useDropdown(false);

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
            initialValues={{ name: '', last_name: '', identification_card: '', nationality: '', sex: '', telephone: '' }}
            onSubmit={values => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldValue }) => (
              <View>
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
                <View
                  style={{
                    justifyContent: 'space-between',
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
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  margin: 16,
                }}>
                  <View>
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
                        height: 30,
                      }}
                      dropDownContainerStyle={{
                        width: 65,
                      }}
                    />
                  </View>
                  <TextField
                    placeholder='Ej: 00000000'
                    inputMode='numeric'
                    containerStyle={{
                      width: "80%",
                      marginRight: 100,
                    }}

                    style={{ width: "80%" }}
                    label="Cédula de identidad"
                    value={values.identification_card}
                    onChangeText={handleChange('identification_card')}
                    error={Boolean(errors.identification_card)}
                    errorTitle={errors.identification_card}
                  />

                </View>
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
              </View>
            )}

          </Formik>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default FamilyHomeScreen;