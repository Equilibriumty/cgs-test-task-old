import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import React from 'react';

export const InputWithLabel = ({
  label,
  onChangeText,
  onBlur,
  value,
  secureTextEntry,
  error,
  multiline,
  numberOfLines,
  mode,
}) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        multiline={multiline}
        numberOfLines={numberOfLines}
        mode={mode}
        label={label}
      />
      {error ? <Text>{error}</Text> : null}
    </View>
  );
};
