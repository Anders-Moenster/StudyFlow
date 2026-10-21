import React from 'react';
import { Text, View } from 'react-native';

import ButtonComponent from '../components/ButtonComponent';
import { GlobalStyle } from '../styles/GlobalStyle';

import { ref, update } from 'firebase/database';
import { database } from '../firebaseConfig';

export default function TaskDetailsScreen({ route }) {

  const { task } = route.params;

  const markAsDone = () => {
  const taskRef = ref(database, 'tasks/' + task.id);

  update(taskRef, {
    status: 'Færdig'
  });
};

  return (
    <View style={GlobalStyle.container}>

      <Text style={GlobalStyle.title}>
        Opgavedetaljer
      </Text>

      <Text>
        Titel: {task.title}
      </Text>

      <Text>
        Fag: {task.subject}
      </Text>

      <Text>
        Deadline: {task.deadline}
      </Text>

      <Text>
        Status: {task.status}
      </Text>

      <ButtonComponent
        title="Markér som færdig"
        onPress={markAsDone}
      />

    </View>
  );
}
