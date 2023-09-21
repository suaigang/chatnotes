import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MessageInput from '../components/MessageInput';

const Chat: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={s.chat}>
      <View style={s.header}></View>
      <View style={s.main}>
        <View style={s.messages}>
          <View style={s.message}>
            <Text>Message</Text>
          </View>
        </View>
      </View>
      <View style={s.toolbar}>
        <MessageInput />
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  chat: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  header: {
    backgroundColor: '#CFCFCF',
    height: 50,
  },
  main: {
    flex: 1,
    padding: 24,
  },
  messages: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  message: {
    padding: 16,
    borderRadius: 16,
    maxWidth: '50%',
    backgroundColor: 'white',
  },
  toolbar: {
    borderColor: '#EEE',
    borderTopWidth: 2,
    height: 50,
    display: 'flex',
    gap: 8,
  },
});

export default Chat;