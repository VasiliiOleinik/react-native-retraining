import React from 'react';
import { View, Text } from 'react-native';
import TodoForm from '../../components/Todo/TodoForm';
import TodoList from '../../components/Todo/TodoList';
import { styles } from './task-list.styles';

export const TaskList: React.FC = () => {
  return (
    <View style={styles.container}>
      <TodoForm />
      <TodoList />
    </View>
  );
};
