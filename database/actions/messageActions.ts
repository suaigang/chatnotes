export const ADD_MESSAGE = 'ADD_MESSAGE';


interface AddMessageAction {
  type: typeof ADD_MESSAGE;
  payload: string;
}

export type MessageActionTypes = AddMessageAction;

export function addMessage(message: string): MessageActionTypes {
  return {
    type: ADD_MESSAGE,
    payload: message
  };
}
