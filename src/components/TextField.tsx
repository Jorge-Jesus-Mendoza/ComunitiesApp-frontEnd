import { StyleProp, TextStyle, View } from 'react-native';
import { Text, TextInput, TextInputProps } from 'react-native-paper';
import { colors } from '../theme/appTheme';

export interface ExtendedTextFieldProps extends TextInputProps {
  // any other props that come into the component
  errorTextStyles?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<TextStyle>;
  errorTitle?: any;
}
export const TextField = ({
  error,
  keyboardType = 'default',
  style = {},
  errorTextStyles = {},
  containerStyle = {},
  errorTitle,
  ...props
}: ExtendedTextFieldProps) => {
  return (
    <View style={{
      width: '100%',
      ...containerStyle as object,
    }}>
      <TextInput
        selectionColor={colors.primary}
        mode="flat"
        keyboardType={keyboardType}
        activeOutlineColor={colors.primary}
        underlineColor={colors.primaryDark}
        activeUnderlineColor={colors.primary}

        style={{
          backgroundColor: 'transparent',
          width: '100%',
          ...style as object,
        }}
        error={error}
        {...props}
      />
      {error && (
        <Text
          style={{
            color: colors.error,
            ...errorTextStyles as object,
          }}>
          {errorTitle || 'Este campo es requerido'}
        </Text>
      )}
    </View>
  );
};
