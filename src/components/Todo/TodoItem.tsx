import React, { useState } from 'react';
import { removeItem, completedItem, editItem } from '../../store/todos';
import { useDispatch } from '../../store/hooks';
import { View, Text, Pressable, TextInput } from 'react-native';
import { todoItem } from './styles/todo-item.styles';

const TodoItem = ({ item }: any) => {
  const { id, description, completed } = item || {};
  const [todoDescription, setTodoDescription] = useState(description);
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(item));
  };

  const handleCompleted = () => {
    dispatch(completedItem(item));
  };

  const handleEdit = () => {
    dispatch(
      editItem({
        id,
        completed,
        description: todoDescription,
      }),
    );
    setEdit(false);
    setTodoDescription('');
  };

  if (edit) {
    return (
      <View style={todoItem.editContainer}>
        <TextInput
          onChangeText={setTodoDescription}
          placeholder={'Todo item'}
          value={todoDescription}
          style={todoItem.editInput}
        />
        <Pressable onPress={handleEdit} style={todoItem.editBtn}>
          <Text style={todoItem.editBtnText}>Add todo</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={todoItem.block}>
      {completed && <View style={todoItem.completed}></View>}
      <Pressable onPress={handleCompleted} style={todoItem.completedBtn}>
        <Text>Completed</Text>
      </Pressable>
      <Text style={todoItem.text}>{description}</Text>
      <View style={todoItem.btns}>
        <Pressable onPress={() => setEdit(!edit)} style={todoItem.removeBtn}>
          <Text>Edit</Text>
        </Pressable>
        <Pressable onPress={handleRemove} style={todoItem.removeBtn}>
          <Text>X</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TodoItem;
