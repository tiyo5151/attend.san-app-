import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TodoList } from '../components/TodoList';
import { useTodos } from '../hooks/useTodos';

export const HomeScreen: React.FC = () => {
  const { todos, toggleTodo, deleteTodo } = useTodos();

  return (
    <View style={styles.container}>
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
