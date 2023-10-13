import { createStore, combineReducers, Store } from 'redux';
import messageReducer from './reducers/messageReducer';

const rootReducer = combineReducers({
  messages: messageReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const store: Store<AppState> = createStore(rootReducer);

export default store;
