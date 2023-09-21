import Realm from 'realm';

export type Message = {
  text: string;
  createdAt: Date;
};

export const MessageSchema: Realm.ObjectSchema = {
  name: 'Message',
  properties: {
    text: 'string',
    createdAt: 'date',
  },
};