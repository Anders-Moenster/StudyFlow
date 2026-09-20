import React from 'react';
import { Pressable, Text } from 'react-native';

import { GlobalStyle } from '../styles/GlobalStyle';

export default function ButtonComponent({ title, onPress }) {
  return (
    <Pressable
      style={GlobalStyle.button}
      onPress={onPress}
    >
      <Text style={GlobalStyle.buttonText}>
        {title}
      </Text>
    </Pressable>
  );
}