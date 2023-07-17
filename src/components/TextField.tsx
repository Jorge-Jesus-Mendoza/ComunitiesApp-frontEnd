import React from 'react';
import {Text, TextInput} from 'react-native-paper';

export const TextField = (props: any) => {
  const {
    value,
    error,
    onChangeText,
    field,
    label,
    secureTextEntry = false,
  } = props;
  return (
    <>
      <TextInput
        label={label}
        selectionColor="#82d5ff"
        mode="flat"
        activeOutlineColor="red"
        secureTextEntry={secureTextEntry}
        value={value}
        style={{backgroundColor: 'transparent'}}
        onChangeText={onChangeText}
        error={error ? true : false}
      />
      {error && (
        <Text
          style={{
            color: '#dc3545',
          }}>
          {error}
        </Text>
      )}
    </>
  );
};
