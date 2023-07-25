import React from 'react';
import {useWindowDimensions} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {ActivityIndicator, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

interface DefaultSchema {
  label: string;
  value: string;
  icon?: string;
  parent?: string;
  selectable?: string;
  disabled?: string;
  testID?: string;
  containerStyle?: string;
  labelStyle?: string;
}

interface SelectLoaderProps {
  items: any;
  open: boolean;
  setOpen: any;
  listMode?: 'SCROLLVIEW' | 'FLATLIST' | 'MODAL';
  placeholder?: string;
  value: string;
  onSelectItem: any;
  loading?: boolean;
  label?: string;
  schema?: DefaultSchema;
}

const SelectLoader = ({
  items,
  open,
  setOpen,
  loading,
  listMode = 'SCROLLVIEW',
  placeholder = '',
  value,
  onSelectItem,
  label,
  schema = {
    label: 'label',
    value: 'value',
    icon: 'icon',
    parent: 'parent',
    selectable: 'selectable',
    disabled: 'disabled',
    testID: 'testID',
    containerStyle: 'containerStyle',
    labelStyle: 'labelStyle',
  },
}: SelectLoaderProps) => {
  const {width} = useWindowDimensions();
  return (
    <>
      <Text variant="labelSmall">{label}</Text>
      <DropDownPicker
        setValue={() => {}}
        items={items}
        open={open}
        loading={loading}
        disabled={loading}
        activityIndicatorColor="red"
        ArrowUpIconComponent={({style}) => (
          <Icon size={25} name="chevron-up-outline"></Icon>
        )}
        ArrowDownIconComponent={({style}) => (
          <>
            {(loading && (
              <ActivityIndicator animating={loading} color="black" size={30} />
            )) || <Icon size={25} name="chevron-down-outline"></Icon>}
          </>
        )}
        activityIndicatorSize={30}
        ActivityIndicatorComponent={({color, size}) => (
          <ActivityIndicator animating={loading} color={color} size={size} />
        )}
        setOpen={setOpen}
        value={value}
        schema={schema}
        listMode={listMode}
        // dropDownDirection="TOP"
        onSelectItem={onSelectItem}
        placeholder={placeholder}
        labelStyle={{
          fontSize: 16,
          color: 'black',
          fontWeight: 'bold',
        }}
        style={{
          width: width * 0.7,
          marginBottom: open ? 200 : 20,
          backgroundColor: loading ? '#EBEBE4' : 'white',
        }}
        dropDownContainerStyle={{
          width: width * 0.7,
          elevation: 2,
        }}
      />
    </>
  );
};

export default SelectLoader;
