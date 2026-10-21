import React from 'react';
import { Text, View } from 'react-native';

import { GlobalStyle } from '../styles/GlobalStyle';

export default function CompletedTasksScreen() {
  return (
    <View style={GlobalStyle.container}>

      <Text style={GlobalStyle.title}>
        Færdige opgaver
      </Text>

      <Text>
        Her kan du se dine færdige studieopgaver.
      </Text>

    </View>
  );
}