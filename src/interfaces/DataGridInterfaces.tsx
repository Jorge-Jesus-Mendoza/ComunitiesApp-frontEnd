import { ReactElement, ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { DataTableCellProps, DataTableHeaderProps, DataTableRowProps, DataTableTitleProps } from "react-native-paper";

type valueProps = {
  value: any,
  row: GridRow;
};

type ModifiedDataTableCellProps = Omit<DataTableCellProps, 'children'> &
{
  children?: ReactNode | ((props: valueProps) => ReactElement);
};
type ModifiedDataTableHeaderProps = Omit<DataTableHeaderProps, 'children'> &
{
  children?: ReactNode | ((props: valueProps) => ReactElement);
};
type ModifiedDataTableTitleProps = Omit<DataTableTitleProps, 'children'> &
{
  children?: ReactNode | ((props: valueProps) => ReactElement);
};
type ModifiedDataTableRowProps = Omit<DataTableRowProps, 'children'> &
{
  children?: ReactNode | ((props: valueProps) => ReactElement);
};

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

