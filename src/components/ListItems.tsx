import React from 'react';
import {View} from 'react-native';
import {DataTable} from 'react-native-paper';

const ListItems = (props: any) => {
  const {
    items,
    collums,
    setPage,
    page,
    numberOfItemsPerPageList,
    itemsPerPage,
    onItemsPerPageChange,
  } = props;

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  const Rows = () => {
    {Object.entries(items).forEach(([key, value]) => 

  }
  return (
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
        <DataTable.Header>
          {collums.map((collum: any) => (
            <DataTable.Title>{collum.headerName}</DataTable.Title>
          ))}
        </DataTable.Header>

        {items.slice(from, to).map((item: any) => (
          <DataTable.Row key={item.key} >

            {Object.entries(items).forEach(([key, value]) => 
              <DataTable.Cell>{value}</DataTable.Cell>
            )}
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
    </View>
  );
};

export default ListItems;
