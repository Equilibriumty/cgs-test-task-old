import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import Main from './screens/Main';
import RootStackScreens from './screens/RootStackScreens';
import { Provider } from 'react-native-paper';
import { theme } from './theme/theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import AuthProvider, { AuthContext } from './context/AuthContext';

// const isAuth = true; // it's temporary

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Provider theme={theme}>
          <RootStackScreens />
        </Provider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
