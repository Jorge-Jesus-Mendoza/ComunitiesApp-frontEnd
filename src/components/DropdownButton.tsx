import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import DropDownPicker, { DropDownPickerProps, ValueType } from 'react-native-dropdown-picker';
import { Text } from 'react-native-paper';
import useDropdown from '../hooks/useDropDown';

type Item = {
  label: string;
  value: ValueType;
};


type Select<ValueType> = DropDownPickerProps<ValueType> & {
  label?: string;
  externalContainerStyle?: StyleProp<ViewStyle>;
  externalLabelStyle?: StyleProp<TextStyle>;
};


const DropdownButton = <ValueType extends Item>({ externalContainerStyle, externalLabelStyle, label, ...props }: Select<ValueType>) => {
  const { isOpen, toggleOpen } = useDropdown(false);
  return (
    <View style={{
      marginLeft: 15,
      ...externalContainerStyle as object
    }}>
      <Text
        variant='labelSmall'
        style={{
          ...externalLabelStyle as object
        }}
      >
        {label}
      </Text>
      <DropDownPicker
        {...props}
        setValue={() => { }}
        open={isOpen}
        setOpen={toggleOpen}
      />
    </View>
  );
};

export default DropdownButton;
