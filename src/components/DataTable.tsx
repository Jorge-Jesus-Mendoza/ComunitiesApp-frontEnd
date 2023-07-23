import { useEffect, useState } from 'react';
import { ScrollView, StyleProp, View, ViewStyle } from 'react-native';
import { DataTable, DataTableCellProps, DataTableHeaderProps, DataTableProps, DataTableTitleProps } from 'react-native-paper';
type GridRow = {
  id: number | string;
  [key: string]: any;
};

type GridColDef = {
  field: string;
  headerName: string;
  numeric?: boolean;
  titleProps?: DataTableTitleProps;
  headerProps?: DataTableHeaderProps;
  cellProps?: DataTableCellProps;
};

// Adaptación de props para DataTable de react-native-paper
type DataGridProps = DataTableProps & {
  rows: GridRow[];
  columns: GridColDef[];
  containerStyles?: StyleProp<ViewStyle>;
};
const DataGrid: React.FC<DataGridProps> = ({ rows, columns, containerStyles }) => {
  const [page, setPage] = useState<number>(0);
  const [numberOfItemsPerPageList] = useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0]
  );
  const [items] = useState([

    {
      key: 1,
      name: 'Cupcake',
      calories: 262,
      fat: 16,
      weight: 106,
      water: 106,
      ball: 106,
      think: 106,
      light: 106,
    },
    {
      key: 2,
      name: 'Eclair',
      calories: 262,
      fat: 16,
      weight: 106,
      water: 106,
      ball: 106,
      think: 106,
      light: 106,
    },
    {
      key: 3,
      name: 'Frozen yogurt',
      calories: 159,
      fat: 6,
      weight: 60,
      water: 60,
      ball: 60,
      think: 60,
      light: 60,
    },
    {
      key: 4,
      name: 'Gingerbread',
      calories: 305,
      fat: 3.7,
      weight: 30.7,
      water: 30.7,
      ball: 30.7,
      think: 30.7,
      light: 30.7,
    },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);
  return (
    <View
      style={{
        ...containerStyles as object
      }}>
      <ScrollView horizontal>
        <DataTable style={{
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.1,
          shadowRadius: 1,
          elevation: .5,
          borderRadius: 2,
        }}>
          {columns?.length && columns.map(({ headerProps, titleProps, headerName }: any) => (
            <DataTable.Header {...headerProps}>
              <DataTable.Title
                textStyle={{
                  fontWeight: 'bold',
                }}
                {...titleProps}
              >{headerName}</DataTable.Title>
            </DataTable.Header>

          ))}

          {rows?.length && rows.slice(from, to).map((row) => (
            <DataTable.Row key={row.id}>
              {columns.map(({ field, cellProps }) => (
                <DataTable.Cell key={field} {...cellProps}>
                  {row[field]}
                </DataTable.Cell>
              ))}
            </DataTable.Row>
          ))}
          <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(items.length / itemsPerPage)}
            onPageChange={(page) => setPage(page)}
            label={`${from + 1}-${to} de ${items.length}`}
            numberOfItemsPerPageList={numberOfItemsPerPageList}
            numberOfItemsPerPage={itemsPerPage}
            onItemsPerPageChange={onItemsPerPageChange}
            showFastPaginationControls
            selectPageDropdownLabel="Filas por página"
          />
        </DataTable>
      </ScrollView>
    </View>
  );
};

export default DataGrid;