import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors, globalStyles, radius, size, spacings } from '../theme/theme';
import { ITodo } from '../types/types';
import { Button, Checkbox } from 'react-native-paper';
import todoApi from './../service/todo.service';
import EditTodoModal from './EditTodoModal';

const TodoElement: React.FC<ITodo> = (props: ITodo) => {
  return (
    <View style={styles.todoElement}>
      <View style={globalStyles.spaciousRow}>
        <Text>{props.title}</Text>
        <Text>{props.year}</Text>
      </View>
      <Text>{props.description}</Text>
      <View style={globalStyles.centeredRow}>
        <Text>Completed: </Text>
        <Checkbox status={props.isCompleted ? 'checked' : 'unchecked'} />
        <Text>Public: </Text>
        <Checkbox status={props.isPublic ? 'checked' : 'unchecked'} />
      </View>
      <View style={globalStyles.centeredRow}>
        <EditTodoModal todo={props} />
        <Button onPress={() => todoApi.removeTodo(props._id)}>Delete</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoElement: {
    backgroundColor: colors.lightgreen,
    padding: spacings.s8,
    width: size.z90,
    marginVertical: spacings.s8,
    marginHorizontal: spacings.s16,
    borderRadius: radius.r8,
  },
});

export default TodoElement;
