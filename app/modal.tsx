import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useTodos } from '../src/hooks/useTodos';
import { useRouter } from 'expo-router';

export default function AddTodoModal() {
  const [title, setTitle] = useState('');
  const { addTodo } = useTodos();
  const router = useRouter();

  const handleAddTodo = () => {
    if (title.trim()) {
      addTodo(title.trim());
      router.back();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter todo title"
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});
