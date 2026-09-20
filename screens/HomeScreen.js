import React from 'react';
import { Text, View } from 'react-native';

import ButtonComponent from '../components/ButtonComponent';
import { GlobalStyle } from '../styles/GlobalStyle';

export default function HomeScreen({ navigation }) {

  const handleButtonPress = () => {
    navigation.navigate('Tasks');
  };

  return (
    <View style={GlobalStyle.container}>

      <Text style={GlobalStyle.title}>
        StudyFlow
      </Text>

      <Text style={GlobalStyle.subtitle}>
        Få overblik over dit studie
      </Text>

      <ButtonComponent
        title="Se mine opgaver"
        onPress={handleButtonPress}
      />

    </View>
  );
}