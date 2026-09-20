import React from 'react';
import { Text, View } from 'react-native';

import ButtonComponent from '../components/ButtonComponent';
import { GlobalStyle } from '../styles/GlobalStyle';

export default function TaskDetailsScreen() {
  return (
    <View style={GlobalStyle.container}>

      <Text style={GlobalStyle.title}>
        Opgavedetaljer
      </Text>

      <Text>
        Her vises information om opgaven.
      </Text>

      <ButtonComponent
        title="Markér som færdig"
        onPress={() => console.log('Opgaven er færdig')}
      />

    </View>
  );
}
