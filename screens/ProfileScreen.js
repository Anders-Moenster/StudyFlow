import React from 'react';
import { Text, View } from 'react-native';

import { GlobalStyle } from '../styles/GlobalStyle';

export default function ProfileScreen() {
  return (
    <View style={GlobalStyle.container}>

      <Text style={GlobalStyle.title}>
        Profil
      </Text>

      <Text>
        Her kan brugeren se sine profiloplysninger.
      </Text>

    </View>
  );
}