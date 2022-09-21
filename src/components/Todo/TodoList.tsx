import React from 'react';
import { useSelector, useDispatch } from '../../store/hooks';
import { RootState } from '../../store/store';
import TodoItem from './TodoItem';
import { clearList } from '../../store/todos';
import { Text, View, Button, Pressable } from 'react-native';
import { todoList } from './styles/todo-list.styles';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  const handleClear = () => {
    dispatch(clearList());
  };

  if (todos.length === 0) return <Text>List is epmty</Text>;

  return (
    <View>
      <View>
        {todos.map(item => (
          <TodoItem key={item.id} item={item} />
        ))}
      </View>
      <Pressable onPress={handleClear} style={todoList.clearBtn}>
        <Text style={todoList.clearBtnText}>Clear list</Text>
      </Pressable>
    </View>
  );
};

export default TodoList;
