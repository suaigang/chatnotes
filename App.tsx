import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Chat from './screens/Chat';
import Chats from './screens/Chats';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{title: 'Chat'}}
        />
        <Stack.Screen
          name="Chats"
          component={Chats}
          options={{title: 'Chats'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;