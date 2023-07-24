import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, RadioButton, Text, TextInput} from 'react-native-paper';
import {ScrollView, View, useWindowDimensions} from 'react-native';
import {styles, colors} from '../theme/appTheme';
import {DataTable} from 'react-native-paper';
import ListItems from '../components/ListItems';
import communityApi from '../api/communityApi';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
import {Formik, useFormik} from 'formik';
import {TextField} from '../components/TextField';
import DropDownPicker, {ItemType} from 'react-native-dropdown-picker';
import useDropdown from '../hooks/useDropDown';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import SelectLoader from '../components/SelectLoader';

export const ProgramsScreen = () => {
  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const {width, height} = useWindowDimensions();
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0],
  );
  const [Municipalities, setMunicipalities] = useState(null);
  const [loading, setLoading] = useState(false);
  const [Parishes, setParishes] = useState([]);
  const [Programs, setPrograms] = useState(null);
  const [flag, setFlag] = useState(false);
  const {isOpen, toggleOpen} = useDropdown(false);
  const {isOpen: isOpen2, toggleOpen: toggleOpen2} = useDropdown(false);
  const {isOpen: isOpen3, toggleOpen: toggleOpen3} = useDropdown(false);

  const {
    values,
    setFieldValue,
    handleSubmit,
    errors,
    isSubmitting,
    resetForm,
    setSubmitting,
  } = useFormik({
    initialValues: {
      id_municipality: '',
      id_parish: '',
      priority: '',
      name: '',
    },

    onSubmit(values, formikHelpers) {
      console.log(values);
      setSubmitting(true);
      communityApi
        .post('/location/management/create/program', values)
        .then(response => {
          resetForm();
          setSubmitting(false);
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
          setSubmitting(false);
          console.error(error);
        });
    },
    validate(values) {
      const errors: any = {};
      if (values.name === '') {
        errors.name = 'Ingrese un nombre';
      }
      if (values.id_municipality === '') {
        errors.id_municipality = 'Seleccione un Municipio';
      }
      if (values.id_parish === '') {
        errors.id_parish = 'Seleccione una Parroquia';
      }
      if (values.priority === '') {
        errors.priority = 'Seleccione una Prioridad';
      }
      return errors;
    },
  });

  const priorities = [
    {
      label: 'Muy Baja',
      value: '1',
    },
    {
      label: 'Baja',
      value: '2',
    },
    {
      label: 'Normal',
      value: '3',
    },
    {
      label: 'Alta',
      value: '4',
    },
    {
      label: 'Muy alta',
      value: '5',
    },
  ];

  useEffect(() => {
    // if (!flag) {
    // setFlag(true);
    axios
      .all([
        communityApi.get('/location/municipality/5'),
        communityApi.get('/management/programs'),
      ])
      .then(
        axios.spread((municipality, programs) => {
          setMunicipalities(municipality.data);
          setPrograms(programs.data);
        }),
      )
      .catch(err => {
        console.log('FAIL', err);
      });
    // }

    return () => {
      setMunicipalities(null);
      setParishes([]);
      setPrograms(null);
    };
  }, []);

  const isFormValid =
    errors?.name ||
    errors?.id_municipality ||
    errors?.id_parish ||
    errors?.priority;

  const collums = [
    {
      type: 'text',
      headerName: 'Nombre',
    },
    {
      type: 'text',
      headerName: 'Prioridad',
    },
    {
      type: 'text',
      headerName: 'Fecha de creación',
    },
  ];

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  const handleFindPriority = (value: string) => {
    let priority = priorities.filter(item => item?.value?.includes(`${value}`));

    return priority[0].label;
  };

  const _renderItem = ({item}: any) => (
    <DataTable.Row>
      <DataTable.Cell
        style={{
          justifyContent: 'center',
          marginHorizontal: 10,
        }}>
        {item?.name}
      </DataTable.Cell>
      <DataTable.Cell
        style={{
          justifyContent: 'center',
          marginHorizontal: 10,
        }}>
        {handleFindPriority(item.priority)}
      </DataTable.Cell>

      <DataTable.Cell
        style={{
          justifyContent: 'center',
          marginHorizontal: 10,
        }}>
        {moment(item?.date_created).format('LLL')}
      </DataTable.Cell>
    </DataTable.Row>
  );

  const handleSublist = (field: string, value: ItemType<string>) => {
    console.log(
      '🚀 ~ file: ProgramsScreen.tsx:198 ~ handleSublist ~ value:',
      value,
    );
    setFieldValue(field, value);
    setParishes([]);
    setFieldValue('id_parish', '');
    setLoading(true);
    communityApi
      .get(`/location/parish/${Number(value)}`)
      .then(parish => {
        setParishes(parish.data);
        setLoading(false);
      })
      .catch(err => {
        console.log('FAIL', err);
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {(Municipalities && Programs && (
          <>
            <View
              style={{
                // flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                margin: 16,
              }}>
              <Card
                style={{
                  margin: 16,
                  backgroundColor: 'white',
                }}>
                <Card.Content>
                  <>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          marginLeft: 15,
                        }}>
                        <SelectLoader
                          label="Municipio"
                          items={Municipalities}
                          loading={!Municipalities}
                          open={isOpen}
                          value={values.id_municipality}
                          onSelectItem={(value: any) =>
                            handleSublist(
                              'id_municipality',
                              value.id_municipality,
                            )
                          }
                          setOpen={toggleOpen}
                          schema={{
                            label: 'municipality',
                            value: 'id_municipality',
                          }}
                        />

                        <SelectLoader
                          label="Parroquia"
                          items={Parishes}
                          loading={loading}
                          open={isOpen3}
                          value={values.id_parish}
                          onSelectItem={(value: any) =>
                            setFieldValue('id_parish', value.id_parish)
                          }
                          setOpen={toggleOpen3}
                          schema={{
                            label: 'parish',
                            value: 'id_parish',
                          }}
                        />

                        <SelectLoader
                          label="Prioridad"
                          items={priorities}
                          loading={!priorities}
                          open={isOpen2}
                          value={values.priority}
                          onSelectItem={({value}: any) =>
                            setFieldValue('priority', value)
                          }
                          setOpen={toggleOpen2}
                        />
                      </View>
                    </View>

                    <TextField
                      label="Nombre"
                      value={values.name}
                      onChangeText={(value: any) =>
                        setFieldValue('name', value)
                      }
                      error={Boolean(errors?.name)}
                      errorTitle={errors?.name}
                    />

                    <Button
                      style={{
                        marginTop: 16,
                        backgroundColor:
                          isFormValid || !isSubmitting
                            ? colors.primary
                            : 'grey',
                        borderRadius: 16,
                      }}
                      onPress={
                        isFormValid || !isSubmitting
                          ? () => handleSubmit()
                          : () => {}
                      }
                      labelStyle={{
                        color: 'white',
                        fontSize: 16,
                      }}>
                      Agregar Programa
                    </Button>
                  </>
                </Card.Content>
              </Card>
            </View>
            <ListItems
              items={Programs}
              collums={collums}
              setPage={setPage}
              page={page}
              numberOfItemsPerPageList={numberOfItemsPerPageList}
              itemsPerPage={itemsPerPage}
              onItemsPerPageChange={onItemsPerPageChange}
              _renderItem={_renderItem}
              width={width}
            />
          </>
        )) || (
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              width: width,
              height: height * 0.7,
            }}>
            <ActivityIndicator
              style={{alignSelf: 'center'}}
              animating={true}
              size={50}
              color={MD2Colors.red800}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};
