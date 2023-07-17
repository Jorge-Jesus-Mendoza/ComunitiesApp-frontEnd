import React from 'react';
import {DataTable} from 'react-native-paper';

export const ListCell = props => {
  const {item} = props;

  Object.entries(item).map((element: any) => {
    console.log(
      '🚀 ~ file: ListCell.tsx:8 ~ Object.entries ~ element:',
      element,
    );
    return <DataTable.Cell>{element[1]}</DataTable.Cell>;
  });
};
