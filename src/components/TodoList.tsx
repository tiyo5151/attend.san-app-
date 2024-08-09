import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { TodoItem } from './TodoItem';
import { Todo } from '../types/todo';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggle,
  onDelete,
}) => {
  return (
    <FlatList
      style={styles.list}
      data={todos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TodoItem todo={item} onToggle={onToggle} onDelete={onDelete} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});
