import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from './src/lib/clerk';

const Tab = createBottomTabNavigator();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function App() {
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <NavigationContainer>
        <Tab.Navigator>Hello</Tab.Navigator>
      </NavigationContainer>
    </ClerkProvider>
  );
}
