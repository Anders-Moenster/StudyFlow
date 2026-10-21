import React from 'react';
import { Text, View } from 'react-native';

import { GlobalStyle } from '../styles/GlobalStyle';

export default function CalendarScreen() {
  return (
    <View style={GlobalStyle.container}>

      <Text style={GlobalStyle.title}>
        Kalender
      </Text>

      <Text>
        Her kan du få overblik over kommende deadlines.
      </Text>

    </View>
  );
}