import { ADD_MESSAGE, MessageActionTypes } from '../actions/messageActions';

interface MessageState {
  messages: string[];
}

const initialState: MessageState = {
  messages: []
};

function messageReducer(
  state = initialState,
  action: MessageActionTypes
): MessageState {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    default:
      return state;
  }
}

export default messageReducer;
