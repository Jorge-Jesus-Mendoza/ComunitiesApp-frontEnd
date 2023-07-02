import React, {useContext, useState} from 'react';
import {Button, List, Text, TextInput} from 'react-native-paper';
import {ScrollView, View, Image, useWindowDimensions} from 'react-native';
import {styles, colors} from '../theme/appTheme';
import customFetch from '../components/customFetch';
import {AuthContext} from '../context/AuthContext';
import {initialLoginData, loginItem} from '../interfaces/authInterfaces';
import {DataTable} from 'react-native-paper';
import ListItems from '../components/ListItems';

export const TestScreen = props => {
  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0],
  );

  const [items] = React.useState([
    {
      key: 1,
      name: 'Cupcake',
      calories: 356,
      fat: {test: 5},
    },
    {
      key: 2,
      name: 'Eclair',
      calories: 262,
      fat: 16,
    },
    {
      key: 3,
      name: 'Frozen yogurt',
      calories: 159,
      fat: 6,
    },
    {
      key: 4,
      name: 'Gingerbread',
      calories: 305,
      fat: 3.7,
    },
    {
      key: 5,
      name: 'Cupcake',
      calories: 356,
      fat: 16,
    },
    {
      key: 6,
      name: 'Eclair',
      calories: 262,
      fat: 16,
    },
    {
      key: 7,
      name: 'Frozen yogurt',
      calories: 159,
      fat: 6,
    },
    {
      key: 8,
      name: 'Gingerbread',
      calories: 305,
      fat: 3.7,
    },
  ]);

  const collums = [
    {
      type: 'number',
      headerName: 'ID',
    },
    {
      type: 'number',
      headerName: 'Nombre',
    },
    {
      type: 'number',
      headerName: 'Calorías',
    },
    {
      type: 'number',
      headerName: 'Grasas',
    },
  ];

  Object.entries(items[0]).forEach(([key, value], index) => {
    console.log(
      '🚀 ~ file: TestScreen.tsx:89 ~ Object.entries ~ value:',
      value,
    );
  });

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);
  return (
    <View style={styles.container}>
      <ScrollView>
        <ListItems
          items={items}
          collums={collums}
          setPage={setPage}
          page={page}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={onItemsPerPageChange}
        />
        {/* <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            padding: 20,
            alignItems: 'center',
            marginVertical: 15,
            marginHorizontal: 10,
            borderRadius: 20,
          }}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Dessert</DataTable.Title>
              <DataTable.Title numeric>Calories</DataTable.Title>
              <DataTable.Title numeric>Fat</DataTable.Title>
              <DataTable.Title numeric>Calories</DataTable.Title>
            </DataTable.Header>

            {items.slice(from, to).map(item => (
              <DataTable.Row key={item.key}>
                <DataTable.Cell>{item.name}</DataTable.Cell>
                <DataTable.Cell numeric>{item.calories}</DataTable.Cell>
                <DataTable.Cell numeric>{item.calories}</DataTable.Cell>
              </DataTable.Row>
            ))}

            <DataTable.Pagination
              page={page}
              numberOfPages={Math.ceil(items.length / itemsPerPage)}
              onPageChange={page => setPage(page)}
              label={`${from + 1}-${to} of ${items.length}`}
              numberOfItemsPerPageList={numberOfItemsPerPageList}
              numberOfItemsPerPage={itemsPerPage}
              onItemsPerPageChange={onItemsPerPageChange}
              showFastPaginationControls
              selectPageDropdownLabel={'Rows per page'}
            />
          </DataTable>
        </View> */}
      </ScrollView>
    </View>
  );
};
