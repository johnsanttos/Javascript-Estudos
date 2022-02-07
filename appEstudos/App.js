import React from 'react';
import { View, Text } from 'react-native';

export default function appEstudos() {

  const idade = 18
  const nome = ''

  if (idade >= 18 && nome === 'joao') {
    console.log('Apto a ser gostoso')
  } 
  if (nome == '') {
    console.log('precisa digitar algum caractere')
  }

  return (
    <View>
      <Text> ola</Text>



    </View>
  );
}