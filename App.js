import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import TasksScreen from './screens/TasksScreen';
import TaskDetailsScreen from './screens/TaskDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Tasks"
          component={TasksScreen}
        />

        <Stack.Screen
          name="TaskDetails"
          component={TaskDetailsScreen}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}
