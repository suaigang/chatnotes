import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const MessageInput: React.FC = () => {
  return (
    <View>
      <TextInput placeholder='Message' />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    
  },
  input: {

  }
})

export default MessageInput;