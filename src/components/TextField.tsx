import { StyleProp, TextStyle, View } from 'react-native';
import { Text, TextInput, TextInputProps } from 'react-native-paper';
import { colors } from '../theme/appTheme';

interface ExtendedProps extends TextInputProps {
  // any other props that come into the component
  errorTextStyles?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<TextStyle>;
  errorTitle?: string;
}
export const TextField = ({
  error,
  keyboardType = 'default',
  style = {},
  errorTextStyles = {},
  containerStyle = {},
  errorTitle,
  ...props
}: ExtendedProps) => {
  return (
    <View style={{
      width: '100%',
      ...containerStyle as Object,
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
          ...style as Object,
        }}
        error={error}
        {...props}
      />
      {error && (
        <Text
          style={{
            color: colors.error,
            ...errorTextStyles as Object,
          }}>
          {errorTitle || 'Este campo es requerido'}
        </Text>
      )}
    </View>
  );
};
