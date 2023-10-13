import { ObjectSchema } from 'realm';

export interface Message {
  context: string;
  createdAt: Date;
};

export const MessageSchema: ObjectSchema = {
  name: 'Message',
  properties: {
    context: 'string',
    createdAt: 'date',
  },
};