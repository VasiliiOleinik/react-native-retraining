import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../model/todo';

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Todo>) => {
      state.push({
        id: action.payload.id,
        description: action.payload.description,
        completed: action.payload.completed,
      });
    },

    removeItem: (state, action: PayloadAction<Todo>) => {
      return state.filter(item => item.id !== action.payload.id);
    },

    completedItem: (state, action: PayloadAction<Todo>) => {
      const index = state.findIndex(todo => todo.id === action.payload.id);
      state[index].completed = !state[index].completed;
    },

    editItem: (state, action: PayloadAction<Todo>) => {
      const index = state.findIndex(todo => todo.id === action.payload.id);
      state[index].description = action.payload.description;
    },

    clearList: () => [],
  },
});

export const { addItem, removeItem, clearList, completedItem, editItem } =
  todoSlice.actions;

export default todoSlice.reducer;
