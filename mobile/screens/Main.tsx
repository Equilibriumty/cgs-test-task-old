import { View, SafeAreaView } from 'react-native';
import React from 'react';
import { globalStyles } from '../theme/theme';
import TodoContainer from '../components/TodoContainer';

const Main = () => {
  return (
    <SafeAreaView style={globalStyles.androidSafeArea}>
      <View style={globalStyles.container}>
        <TodoContainer />
      </View>
    </SafeAreaView>
  );
};

export default Main;
