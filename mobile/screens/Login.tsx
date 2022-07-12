import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { globalStyles } from '../theme/theme';
import { useMutation } from 'react-query';
import userApi from '../service/user.service';
import { IUser, userValidationScheme } from '../types/types';
import { AxiosResponse } from 'axios';
import { Formik } from 'formik';
import { InputWithLabel } from '../components/InputWithLabel';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login: React.FC = () => {
  const navigation = useNavigation();

  const redirectToRegister = () => {
    navigation.navigate('Register');
  };

  const { login } = useContext(AuthContext);

  const loginTo = useMutation((values: IUser) => userApi.loginUser(values), {
    onSuccess: async (response: AxiosResponse) => {
      await AsyncStorage.setItem('token', response.data.token);
      login();
    },

  });

  return (
    <View style={globalStyles.androidSafeArea}>
      <Text>Login</Text>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={userValidationScheme}
        onSubmit={(values, actions) => {
          actions.resetForm();
          loginTo.mutate(values);
        }}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <View>
            <InputWithLabel
              error={errors.email}
              label='Email'
              value={values.email}
              onChangeText={handleChange('email')}
            />

            <InputWithLabel
              error={errors.password}
              label='Password'
              value={values.password}
              onChangeText={handleChange('password')}
            />
            <Button onPress={handleSubmit}>Sign In</Button>
            <Button onPress={redirectToRegister}>No account? Register</Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
