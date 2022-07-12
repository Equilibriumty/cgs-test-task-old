import { View, Text } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import { InputWithLabel } from './InputWithLabel';

const SharedInputs = ({
  handleChange,
  setFieldValue,
  values,
  handleSubmit,
  errors,
}) => {
  return (
    <View>
      <InputWithLabel
        label="Title of todo"
        mode="outlined"
        value={values?.title}
        onChangeText={handleChange('title')}
        error={errors.title}
      />
      <InputWithLabel
        label="description"
        mode="outlined"
        value={values?.description}
        onChangeText={handleChange('description')}
        error={errors.description}
      />

      <InputWithLabel
        label="year"
        mode="outlined"
        value={values?.year?.toString()}
        onChangeText={handleChange('year')}
        error={errors.year}
      />

      <View>
        <CheckBox
          onValueChange={() => setFieldValue('isPublic', !values?.isPublic)}
          value={values?.isPublic}
        />
        {errors ? <Text>{errors.isPublic}</Text> : null}

        <CheckBox
          onValueChange={() =>
            setFieldValue('isCompleted', !values?.isCompleted)
          }
          value={values?.isCompleted}
        />
        {errors ? <Text>{errors.isCompleted}</Text> : null}

        <Button onPress={handleSubmit}>Save</Button>
      </View>
    </View>
  );
};

export default SharedInputs;
