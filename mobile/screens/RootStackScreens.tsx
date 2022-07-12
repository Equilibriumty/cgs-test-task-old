import React, { useContext, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './Welcome';
import Login from './Login';
import Register from './Register';
import { AuthContext } from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Main from './Main';
import { NavigationContainer } from '@react-navigation/native';

const RootStack = createStackNavigator();

const RootStackScreens = () => {
  const { isAuthenticated, login } = useContext(AuthContext);

  useEffect(() => {
    async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        login();
      }
    };
  }, []);

  const GuestRoutes = () => {
    return (
      <RootStack.Navigator>
        <RootStack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        ></RootStack.Screen>
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        ></RootStack.Screen>
        <RootStack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        ></RootStack.Screen>
      </RootStack.Navigator>
    );
  };

  const MainRoute = () => {
    return (
      <RootStack.Navigator>
        <RootStack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        ></RootStack.Screen>
      </RootStack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      {isAuthenticated ? <MainRoute /> : <GuestRoutes />}
    </NavigationContainer>
  );
};
export default RootStackScreens;
