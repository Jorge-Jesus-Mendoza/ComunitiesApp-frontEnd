import { useState } from 'react';
import DropDownPicker, { DropDownPickerProps } from 'react-native-dropdown-picker';

type Item = {
  label: string;
  value: string;
};
interface DropDownButtonProps extends DropDownPickerProps<Item> {

}

const DropdownButton = ({ placeholder, value, items, onSelectItem }: DropDownButtonProps) => {
  const [openSelect, setOpenSelect] = useState(false);
  const setOpen = () => setOpenSelect(prev => !prev);
  return (
    <DropDownPicker
      items={items}
      open={openSelect}
      setOpen={setOpen}
      placeholder={placeholder}
      value={value}
      dropDownDirection="TOP"
      onSelectItem={onSelectItem}
      setValue={val => console.log(val)}
    />
  );
};

export default DropdownButton;
