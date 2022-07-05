import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import {LocalNotification} from '../Services/LocalPushController';

export default function ChatsScreen() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Hello',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
    // LocalNotification();
  }, []);

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#0EA35D',
          },
        }}
      />
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      onPressAvatar={() => {
        // handleNotification(messages);
      }}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend={true}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
