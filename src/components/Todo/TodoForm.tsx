import React, { useState } from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';
import { useDispatch } from '../../store/hooks';
import { addItem } from '../../store/todos';
import { todoForm } from './styles/todo-form.styles';

const TodoForm = () => {
  const [todoDescription, setTodoDescription] = useState('');

  const dispatch = useDispatch();

  const handleClick = (e: any) => {
    e.preventDefault();
    if (todoDescription.trim().length === 0) {
      return;
    }
    dispatch(
      addItem({
        id: new Date().getTime().toString(),
        description: todoDescription,
        completed: false,
      }),
    );
    setTodoDescription('');
  };

  return (
    <View style={todoForm.container}>
      <TextInput
        onChangeText={setTodoDescription}
        placeholder={'Todo item'}
        value={todoDescription}
        style={todoForm.input}
      />
      <Pressable onPress={handleClick} style={todoForm.button}>
        <Text style={todoForm.btnText}>Add todo</Text>
      </Pressable>
    </View>
  );
};

export default TodoForm;
