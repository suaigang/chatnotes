import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

interface MessageInputProps {
  value: string;
  onChange?: (text: string) => void;
  onSubmitEditing?: () => void;
}

const MessageInput: React.FC<MessageInputProps> = ({value, onChange, onSubmitEditing}) => {
  const onChangeHandler = (e: any) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <TextInput
      style={s.input}
      placeholder='Message'
      onChange={onChangeHandler}
      onSubmitEditing={onSubmitEditing}
      value={value}
    />
  );
};

const s = StyleSheet.create({
  input: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 16,
    borderRadius: 100,
    border: '1px solid #DDD',
  }
})

export default MessageInput;