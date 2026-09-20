import React from 'react';
import { Text, View, FlatList, Button } from 'react-native';

import { TASKS } from '../data/tasks';
import ButtonComponent from '../components/ButtonComponent';
import { GlobalStyle } from '../styles/GlobalStyle';

export default function TasksScreen({ navigation }) {
  return (
    <View style={GlobalStyle.container}>

      <Text style={GlobalStyle.title}>
        Mine opgaver
      </Text>

    <FlatList
        data={TASKS}
        renderItem={({ item }) => {
            return (
             <View style={GlobalStyle.taskCard}>

                 <Text style={GlobalStyle.taskTitle}>
                    {item.title}
                </Text>

                <Text>
                    Fag: {item.subject}
                </Text>

                <Text>
                     Deadline: {item.deadline}
                </Text>

                <Text>
                    Status: {item.status}
                </Text>

                <ButtonComponent
                    title="Se opgave"
                    onPress={() => navigation.navigate('TaskDetails')}
                />

            </View>
        );
    }}
    />
    </View>
  );
}