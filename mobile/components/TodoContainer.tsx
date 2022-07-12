import { ListRenderItem, View } from 'react-native';
import React from 'react';
import { useQuery } from 'react-query';
import todoApi from '../service/todo.service';
import { FlatList } from 'react-native-gesture-handler';
import TodoElement from './TodoElement';
import { ITodo, QUERY_KEYS } from '../types/types';
import { Title } from 'react-native-paper';
import AddTodoModal from './AddTodoModal';
import { globalStyles } from '../theme/theme';

const TodoContainer = () => {
  const { data } = useQuery(QUERY_KEYS.todos, () => todoApi.getTodos());

  const renderItem: ListRenderItem<ITodo> = ({ item }) => (
    <TodoElement {...item} />
  );
  return (
    <View>
      <View style={globalStyles.spaciousRow}>
        <Title>Add todo</Title>
        <AddTodoModal />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(todo) => todo._id}
      ></FlatList>
    </View>
  );
};

export default TodoContainer;
