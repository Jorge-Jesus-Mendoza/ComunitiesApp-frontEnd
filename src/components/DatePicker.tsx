import moment from 'moment';
import React from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import DateTimePickerModal, { DateTimePickerProps } from 'react-native-modal-datetime-picker';
import { TextInput } from 'react-native-paper';
import useDropdown from '../hooks/useDropDown';
import { ExtendedTextFieldProps, TextField } from './TextField';

interface DatePickerProps extends ExtendedTextFieldProps {
  DatePickerProps: DateTimePickerProps;
  containerStyles?: StyleProp<ViewStyle>;
  date: Date;
}
const DatePicker = ({ DatePickerProps, containerStyles, date, error, ...props }: DatePickerProps) => {
  const { isOpen, toggleOpen } = useDropdown(false);
  return (
    <View style={{
      marginVertical: 10,
      ...containerStyles as object,
    }}>
      <TouchableOpacity onPress={toggleOpen}>
        <TextField
          editable={false}
          placeholder='Ej: DD-MM-YYYY'
          autoComplete='birthdate-full'
          label="Fecha de Nacimiento"
          value={moment(date).format('DD-MM-YYYY')}
          error={Boolean(error)}
          right={<TextInput.Icon icon="calendar" disabled />}
          {...props}
        />
      </TouchableOpacity>
      <DateTimePickerModal
        date={date}
        mode='date'
        isVisible={isOpen}
        {...DatePickerProps}
        onConfirm={(date) => {
          toggleOpen();
          DatePickerProps.onConfirm(date);
        }}
        onCancel={toggleOpen}
      />
    </View>
  );
};

export default DatePicker;