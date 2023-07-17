import React, {useContext, useState} from 'react';
import {Button, List, Text, TextInput} from 'react-native-paper';
import {ScrollView, View, useWindowDimensions, FlatList} from 'react-native';
import {styles, colors} from '../theme/appTheme';
import {DataTable} from 'react-native-paper';
import ListItems from '../components/ListItems';

export const TestScreen = props => {
  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const {width} = useWindowDimensions();
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0],
  );

  const [items] = React.useState([
    {
      key: 1,
      name: 'Cupcake',
      calories: 356,
      fat: 262,
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
      headerName: 'Dessert',
    },
    {
      type: 'number',
      headerName: 'Calories',
    },
    {
      type: 'number',
      headerName: 'Fat',
    },
  ];

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  const _renderItem = ({item}) => (
    <DataTable.Row>
      <DataTable.Cell
        style={{
          justifyContent: 'center',
          width: (width * 0.8) / collums.length,
        }}>
        {item.name}
      </DataTable.Cell>
      <DataTable.Cell
        style={{
          alignContent: 'center',
          justifyContent: 'center',
          width: (width * 0.8) / collums.length,
        }}>
        {item.calories}
      </DataTable.Cell>
      <DataTable.Cell
        style={{
          justifyContent: 'center',
          width: (width * 0.8) / collums.length,
        }}>
        {item.fat}
      </DataTable.Cell>
    </DataTable.Row>
  );

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
          _renderItem={_renderItem}
          width={width}
        />
      </ScrollView>
    </View>
  );
};
