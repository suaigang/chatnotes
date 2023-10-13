import { ObjectSchema } from 'realm';

export interface Message {
  content: string;
  createdAt: Date;
};

export const MessageSchema: ObjectSchema = {
  name: 'Message',
  properties: {
    context: 'string',
    createdAt: 'date',
  },
};