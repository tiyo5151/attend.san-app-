import React from 'react';
import { Tabs } from 'expo-router';
import { TodoProvider } from '../src/contexts/TodoContext';
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <TodoProvider>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Todo List',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </TodoProvider>
  );
}
