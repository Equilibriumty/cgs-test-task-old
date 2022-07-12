import CheckBox from '@react-native-community/checkbox';
import * as React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../theme/theme';
import { ItoDoWithoutId } from '../types/types';

interface IMyCheckboxProps {
  title: string;
  setFieldValue:
    | (((value: boolean) => void) &
        ((value: boolean) => void) &
        ((value: boolean) => void))
    | undefined;
  values: ItoDoWithoutId;
}

const MyCheckbox: React.FC<IMyCheckboxProps> = (props) => {
  return (
    <View
      style={globalStyles.centeredRow}
    >
      <Text>{props.title}</Text>
      <CheckBox
        onValueChange={() =>
          props.setFieldValue
        }
        value={props.values.isPublic}
      />
    </View>
  );
};

export default MyCheckbox;
