import {FC, isValidElement, useEffect, useState} from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DataTable} from 'react-native-paper';
import {DataGridProps} from '../interfaces';

const DataGrid: FC<DataGridProps> = ({rows, columns, containerStyles}) => {
  const {width} = useWindowDimensions();
  const [page, setPage] = useState<number>(0);
  const [numberOfItemsPerPageList] = useState([2, 3, 4]);
  const [itemsPerPage, setItemsPerPage] = useState(numberOfItemsPerPageList[0]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, rows.length);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  // Función para calcular el ancho máximo de cada columna
  const getColumnMaxWidths = () => {
    const maxWidths: {[key: string]: number} = {};
    columns.forEach(({field}) => {
      const headerCellValue =
        columns.find(col => col.field === field)?.headerName || '';
      const headerCellWidth = headerCellValue ? headerCellValue.length : 0;

      const maxCellWidth = Math.max(
        ...rows.slice(from, to).map(row => {
          const cellValue = row[field];
          const cellWidth = cellValue ? String(cellValue).length : 0;
          return cellWidth;
        }),
      );

      const maxWidth = Math.max(headerCellWidth, maxCellWidth);
      maxWidths[field] = maxWidth;
    });
    return maxWidths;
  };

  // Obtener los anchos máximos de las celdas de encabezado y datos
  const columnMaxWidths = getColumnMaxWidths();

  return (
    <View
      style={{
        flex: 1,
        marginVertical: 10,
        ...(containerStyles as object),
      }}>
      <ScrollView horizontal>
        <DataTable style={{backgroundColor: '#f2f2f2'}}>
          <DataTable.Header>
            {columns.map(({field, headerName, titleProps}) => (
              <DataTable.Title
                key={field}
                {...titleProps}
                style={{
                  justifyContent: 'center',
                  flex: 1,
                  flexWrap: 'nowrap',
                  width: (width * (columns.length / 2)) / columns.length,
                  ...(titleProps?.style as object),
                }}>
                {headerName}
              </DataTable.Title>
            ))}
          </DataTable.Header>
          <ScrollView
            style={{flexDirection: 'row', flexGrow: 1}}
            contentContainerStyle={{flexGrow: 1}}>
            <View style={{flexGrow: 1}}>
              {rows.slice(from, to).map(({rowProps, ...row}, index) => (
                <DataTable.Row
                  key={row.id}
                  {...rowProps}
                  style={{
                    ...(index % 2 === 0 ? styles.evenRow : styles.oddRow),
                    ...(rowProps?.style as object),
                  }}>
                  {columns.map(({field, cellProps}) => {
                    const value = row[field];
                    const childrenProps = {value, row};
                    return (
                      <DataTable.Cell
                        key={`${field}${row.id}`}
                        onPress={e => console.log('e ', e)}
                        {...cellProps}
                        style={{
                          justifyContent: 'center',
                          flex: 1,
                          flexWrap: 'nowrap',
                          width:
                            (width * (columns.length / 2)) / columns.length,
                          ...(cellProps?.style as object),
                        }}>
                        {(cellProps &&
                          ((typeof cellProps.children === 'function' &&
                            cellProps.children(childrenProps)) ||
                            (isValidElement(cellProps.children) &&
                              cellProps.children))) ||
                          row[field]}
                      </DataTable.Cell>
                    );
                  })}
                </DataTable.Row>
              ))}
            </View>
          </ScrollView>
          <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(rows.length / itemsPerPage)}
            onPageChange={page => setPage(page)}
            label={`${from + 1}-${to} de ${rows.length}`}
            numberOfItemsPerPageList={numberOfItemsPerPageList}
            numberOfItemsPerPage={itemsPerPage}
            onItemsPerPageChange={itemsPerPage => setItemsPerPage(itemsPerPage)}
            showFastPaginationControls
            selectPageDropdownLabel="Filas por página"
          />
        </DataTable>
      </ScrollView>
    </View>
  );
};

export default DataGrid;

const styles = StyleSheet.create({
  evenRow: {
    backgroundColor: '#fff',
  },
  oddRow: {
    backgroundColor: '#f9f9f9',
  },
});
