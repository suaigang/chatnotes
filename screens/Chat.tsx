import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import MessageInput from '../components/MessageInput';
import { Message } from '../database/schemas';
import Database from '../database/database';

const Chat: React.FC = () => {
  const navigation = useNavigation();
  const [message, setMessage] = React.useState<string>('');
  const [messages, setMessages] = React.useState<Message[]>([]);
  const realm = Database.getRealmInstance();

  useEffect(() => {
    const savedMessages = realm.objects<Message>('Message');
    setMessages(Array.from(savedMessages));
  }, []);


  const onMessageSent = () => {
    const newMessage: Message = {
      context: message,
      createdAt: new Date(),
    };

    realm.write(() => {
      realm.create<Message>('Message', newMessage);
    });

    setMessages([...messages, newMessage]);
    setMessage('');
  }

  return (
    <View style={s.chat}>
      <View style={s.header}></View>
      <View style={s.main}>
        <View style={s.messages}>
          {
            messages.map((message, index) => (
              <View key={index} style={s.message}>
                <Text>{message.context}</Text>
              </View>
            ))
          }
        </View>
      </View>
      <View style={s.toolbar}>
        <View style={s.messageInput}>
          <MessageInput value={message} onChange={setMessage} onSubmitEditing={onMessageSent} />
        </View>
        <TouchableOpacity
          style={s.sendButton}
          onPress={onMessageSent}
        >
          <Text style={s.sendButton_text}>Send</Text>
        </TouchableOpacity>
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
    flexDirection: 'row',
    gap: 8,
    padding: 8,
  },
  messageInput: {
    flex: 1,
    height: '100%',
  },
  sendButton: {
    borderRadius: 100,
    backgroundColor: '#1E90FF', 
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButton_text: {
    color: 'white',
    fontWeight: 'bold',
  }
});

export default Chat;