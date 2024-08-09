import AsyncStorage from '@react-native-async-storage/async-storage';
import { Todo } from '../types/todo';

const TODO_STORAGE_KEY = 'TODO_APP_STORAGE_KEY';

export const saveTodos = async (todos: Todo[]): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(todos);
    await AsyncStorage.setItem(TODO_STORAGE_KEY, jsonValue);
  } catch (error) {
    console.error('Error saving todos:', error);
  }
};

export const loadTodos = async (): Promise<Todo[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(TODO_STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('Error loading todos:', error);
    return [];
  }
};
