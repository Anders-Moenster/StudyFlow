import React from 'react';
import { Text, View } from 'react-native';

import { GlobalStyle } from '../styles/GlobalStyle';

export default function StudyTipsScreen() {
  return (
    <View style={GlobalStyle.container}>

      <Text style={GlobalStyle.title}>
        Studietips
      </Text>

      <Text>
        Her kan du finde tips til at strukturere dit studiearbejde.
      </Text>

    </View>
  );
}