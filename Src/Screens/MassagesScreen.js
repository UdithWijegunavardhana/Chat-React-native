import React, {useEffect} from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';
import notifee from '@notifee/react-native';
import {Searchbar} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from '../styles/MessageStyles';

const Messages = [
  {
    id: '1',
    userName: 'Aleena Mitchel',
    userImg: require('../Assets/img01.png'),
    messageTime: '10 mins ago',
    messageText: 'Hello !',
  },
  {
    id: '2',
    userName: 'John Smith',
    userImg: require('../Assets/img02.png'),
    messageTime: '2 hours ago',
    messageText: 'what about the project evaluation?',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../Assets/img01.png'),
    messageTime: '1 hours ago',
    messageText: '🤩✌️',
  },
];

const MessagesScreen = ({navigation}) => {
  // const onChangeSearch = searchQuery => {
  //   if (searchQuery) {
  //     const formatedData = searchQuery.toLowerCase();
  //     const filterData = filter(data, creative => {
  //       return contains(creative, formatedData);
  //     });
  //     setData(filterData);
  //   } else {
  //     setData(data);
  //   }
  // };

  // const contains = ({creativeHeading, creativeDescription}, searchQuery) => {
  //   if (
  //     creativeHeading.toLowerCase().includes(searchQuery) ||
  //     creativeDescription.toLowerCase().includes(searchQuery)
  //   ) {
  //     return true;
  //   }
  //   return false;
  // };

  return (
    <Container>
      <View style={styles.searchBarContainer}>
        <Searchbar
          placeholder="Search"
          onChangeText={searchQuery => onChangeSearch(searchQuery)}
          autoCapitalize="none"
          style={styles.searchBar}
        />
      </View>
      <FlatList
        data={Messages}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Card
            onPress={() =>
              navigation.navigate('Chat', {userName: item.userName})
            }>
            <UserInfo>
              <UserImgWrapper>
                <UserImg source={item.userImg} />
              </UserImgWrapper>
              <TextSection>
                <UserInfoText>
                  <UserName>{item.userName}</UserName>
                  <PostTime>{item.messageTime}</PostTime>
                </UserInfoText>
                <MessageText>{item.messageText}</MessageText>
              </TextSection>
            </UserInfo>
          </Card>
        )}
      />
    </Container>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBarContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    padding: 0,
    margin: 0,
  },
  searchBar: {
    flex: 1,
    marginVertical: 10,
    height: 45,
    fontSize: 18,
  },
});
