import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TodoList } from '../../src/components/TodoList';
import { useTodos } from '../../src/hooks/useTodos';

export default function HomeScreen() {
  const { todos, toggleTodo, deleteTodo } = useTodos();

  return (
    <View style={styles.container}>
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
