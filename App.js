import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import TasksScreen from './screens/TasksScreen';
import TaskDetailsScreen from './screens/TaskDetailsScreen';
import AddTaskScreen from './screens/AddTaskScreen';
import CompletedTasksScreen from './screens/CompletedTasksScreen';
import CalendarScreen from './screens/CalendarScreen';
import StudyTipsScreen from './screens/StudyTipsScreen';
import ProfileScreen from './screens/ProfileScreen';

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

        <Stack.Screen
          name="AddTask"
          component={AddTaskScreen}
        />

        <Stack.Screen
          name="CompletedTasks"
          component={CompletedTasksScreen}
        />

        <Stack.Screen
          name="Calendar"
          component={CalendarScreen}
        />

        <Stack.Screen
          name="StudyTips"
          component={StudyTipsScreen}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}
