import React, {useContext, useEffect, useState} from 'react';
import {Button, List, Text, TextInput} from 'react-native-paper';
import {ScrollView, View, useWindowDimensions, FlatList} from 'react-native';
import {styles, colors} from '../theme/appTheme';
import {DataTable} from 'react-native-paper';
import ListItems from '../components/ListItems';
import communityApi from '../api/communityApi';
import {AuthContext} from '../context/AuthContext';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';

export const ProgramsScreen = props => {
  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const {width} = useWindowDimensions();
  const {authState} = useContext(AuthContext);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0],
  );
  const [item, setItem] = useState(null);

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${authState.tokenId}`,
  };

  useEffect(() => {
    communityApi
      .get('/location/municipality/5', {headers})
      .then(response => {
        console.log(
          '🚀 ~ file: ProgramsScreen.tsx:80 ~ useEffect ~ response:',
          response.data,
        );
        setItem(response.data);
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

    return () => {};
  }, []);

  const collums = [
    {
      type: 'text',
      headerName: 'Municipalidad',
    },
  ];

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, item?.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  const _renderItem = ({item}: any) => (
    <DataTable.Row>
      <DataTable.Cell
        style={{
          justifyContent: 'center',
          marginHorizontal: 10,
        }}>
        {item.municipality}
      </DataTable.Cell>
    </DataTable.Row>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        {(item && (
          <ListItems
            items={item}
            collums={collums}
            setPage={setPage}
            page={page}
            numberOfItemsPerPageList={numberOfItemsPerPageList}
            itemsPerPage={itemsPerPage}
            onItemsPerPageChange={onItemsPerPageChange}
            _renderItem={_renderItem}
            width={width}
          />
        )) || <ActivityIndicator animating={true} color={MD2Colors.red800} />}
      </ScrollView>
    </View>
  );
};
