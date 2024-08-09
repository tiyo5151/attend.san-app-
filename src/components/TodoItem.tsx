import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.todoContainer}
        onPress={() => onToggle(todo.id)}
      >
        <View style={[styles.checkbox, todo.completed && styles.checked]} />
        <Text style={[styles.todoText, todo.completed && styles.completedText]}>
          {todo.title}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(todo.id)}
      >
        <Text style={styles.deleteButtonText}>削除</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  todoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#000',
  },
  todoText: {
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  deleteButton: {
    backgroundColor: '#ff4444',
    padding: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
  },
});
