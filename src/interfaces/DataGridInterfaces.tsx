import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { DataTableCellProps, DataTableHeaderProps, DataTableRowProps, DataTableTitleProps } from "react-native-paper";


type ModifiedDataTableCellProps = Omit<DataTableCellProps, 'children'> & { children?: ReactNode; };
type ModifiedDataTableHeaderProps = Omit<DataTableHeaderProps, 'children'> & { children?: ReactNode; };
type ModifiedDataTableTitleProps = Omit<DataTableTitleProps, 'children'> & { children?: ReactNode; };
type ModifiedDataTableRowProps = Omit<DataTableRowProps, 'children'> & { children?: ReactNode; };

type GridRow = {
  id: number | string;
  [key: string]: any;
  rowProps?: ModifiedDataTableRowProps;
};

type ValidGridRowKeys = keyof GridRow;

type GridColDef = {
  field: ValidGridRowKeys;
  headerName: string;
  titleProps?: ModifiedDataTableTitleProps;
  headerProps?: ModifiedDataTableHeaderProps;
  cellProps?: ModifiedDataTableCellProps;
};

type DataGridProps = {
  rows: GridRow[];
  columns: GridColDef[];
  containerStyles?: StyleProp<ViewStyle>;
};
export type { DataGridProps, GridColDef, GridRow, ModifiedDataTableCellProps, ModifiedDataTableHeaderProps, ModifiedDataTableRowProps, ModifiedDataTableTitleProps };

