import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MessagesScreen from './Src/Screens/MassagesScreen';
import ChatsScreen from './Src/Screens/ChatsScreen';
import RemotePushController from './Src/Services/RemotePushController';
import LoginScreen from './Src/Screens/LoginScreen';
import OTPScreen from './Src/Screens/OTPScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="OTP" component={OTPScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen} />
        <Stack.Screen
          name="Chat"
          component={ChatsScreen}
          options={({route}) => ({
            title: route.params.userName,
            headerBackTitleVisible: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
