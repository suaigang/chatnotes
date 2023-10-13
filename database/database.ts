import { createStore, combineReducers, Store } from 'redux';
import messageReducer from './reducers/messageReducer';
import { AppState } from 'react-native';

const loadStateFromLocalStorage = () => {
  try {
      const serializedState = localStorage.getItem('reduxState');
      if (serializedState === null) {
          return undefined;
      }
      return JSON.parse(serializedState);
  } catch (err) {
      return undefined;
  }
};

// Функция для сохранения состояния в localStorage
const saveStateToLocalStorage = (state: string) => {
  try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('reduxState', serializedState);
  } catch (err) {
      console.error("Could not save state", err);
  }
};

const rootReducer = combineReducers({
  messages: messageReducer
});

const store: Store<AppState> = createStore(
  rootReducer,
  loadStateFromLocalStorage() // загрузка начального состояния
);

// Подписка на изменения store, чтобы сохранять состояние при каждом изменении
store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

export default store;