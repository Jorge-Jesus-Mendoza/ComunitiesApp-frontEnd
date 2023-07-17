import React from 'react';
import {View, ScrollView, FlatList} from 'react-native';
import {DataTable} from 'react-native-paper';
import {ListCell} from './ListCell';

const ListItems = (props: any) => {
  const {
    items,
    collums,
    setPage,
    page,
    numberOfItemsPerPageList,
    itemsPerPage,
    onItemsPerPageChange,
    _renderItem,
    width,
  } = props;

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  return (
    <ScrollView horizontal>
      <View
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
          <DataTable.Header style={{justifyContent: 'space-between'}}>
            {collums.map(element => (
              <DataTable.Title
                style={{
                  justifyContent: 'center',
                  width: (width * 0.8) / collums.length,
                }}>
                {element.headerName}
              </DataTable.Title>
            ))}
          </DataTable.Header>

          <FlatList data={items.slice(from, to)} renderItem={_renderItem} />

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
      </View>
    </ScrollView>
  );
};

export default ListItems;