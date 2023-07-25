import React, {useEffect, useState} from 'react';
import {Button, Card} from 'react-native-paper';
import {ScrollView, View, useWindowDimensions} from 'react-native';
import {styles, colors} from '../theme/appTheme';
import communityApi from '../api/communityApi';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
import {useFormik} from 'formik';
import {TextField} from '../components/TextField';
import {ItemType} from 'react-native-dropdown-picker';
import useDropdown from '../hooks/useDropDown';
import axios from 'axios';
import moment from 'moment';
import SelectLoader from '../components/SelectLoader';
import {
  columsPrograms,
  priorities,
  programInitialValues,
} from '../data/ProgramsHomeData';
import DataGrid from '../components/DataGrid';

export const ProgramsScreen = () => {
  const {width, height} = useWindowDimensions();
  const [Municipalities, setMunicipalities] = useState(null);
  const [loading, setLoading] = useState(false);
  const [Parishes, setParishes] = useState([]);
  const [Programs, setPrograms] = useState(null);
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
    initialValues: programInitialValues,

    onSubmit(values, formikHelpers) {
      console.log(values);
      setSubmitting(true);
      setPrograms(null);
      communityApi
        .post('/management/create/program', values)
        .then(() => {
          communityApi.get('/management/programs').then(response => {
            let list = [];
            response.data.forEach((value: any, index: number) => {
              let priority = priorities.filter(item =>
                item?.value?.includes(`${value.priority}`),
              );
              list.push({
                ...value,
                priority: priority[0].label,
                date_created: moment(value.date_created).format('YYYY-MM-DD'),
              });
            });
            setPrograms(list);
            resetForm();
            setSubmitting(false);
            setFlag(true);
          });
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
          setFlag(true);
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

  useEffect(() => {
    axios
      .all([
        communityApi.get('/location/municipality/5'),
        communityApi.get('/management/programs'),
      ])
      .then(
        axios.spread((municipality, programs) => {
          setMunicipalities(municipality.data);
          let list = [];
          programs.data.forEach((value: any, index: number) => {
            let priority = priorities.filter(item =>
              item?.value?.includes(`${value.priority}`),
            );
            list.push({
              ...value,
              priority: priority[0].label,
              date_created: moment(value.date_created).format('YYYY-MM-DD'),
            });
          });
          setPrograms(list);
          console.log(
            '🚀 ~ file: ProgramsScreen.tsx:116 ~ axios.spread ~ list:',
            list,
          );
        }),
      )
      .catch(err => {
        console.log('FAIL', err);
      });

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

  const handleSublist = (field: string, value: ItemType<string>) => {
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
                        backgroundColor: !isFormValid ? colors.primary : 'grey',
                        borderRadius: 16,
                      }}
                      onPress={
                        !isFormValid
                          ? () => handleSubmit()
                          : () => {
                              console.log('nope');
                            }
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

            <Card
              style={{
                margin: 16,
                backgroundColor: 'white',
                width: width * 0.9,
              }}>
              <DataGrid rows={Programs || []} columns={columsPrograms} />
            </Card>
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
