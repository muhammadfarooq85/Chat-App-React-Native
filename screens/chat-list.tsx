import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const USERS = [
  {
    id: '1',
    name: 'Ali Raza',
    lastMessage: 'See you tomorrow!',
    time: '10:45 AM',
    avatar:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHw1fHxQZW9wbGV8ZW58MXx8fHwxNjQzMDE1MjM2&ixlib=rb-1.2.1&q=80&w=1080',
    messages: [
      { id: 'm1', text: 'Hey Ali!', sender: true },
      { id: 'm2', text: 'Hi there!', sender: false },
      { id: 'm3', text: 'Are we meeting tomorrow?', sender: true },
      { id: 'm4', text: 'Yes, see you at 10!', sender: false },
    ],
  },
  {
    id: '2',
    name: 'Ayesha Khan',
    lastMessage: 'Thanks a lot!',
    time: '9:20 AM',
    avatar:
      'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxNXx8UGVvcGxlfGVufDF8fHx8MTY0MzEwMzk1MQ&ixlib=rb-1.2.1&q=80&w=1080',
    messages: [
      { id: 'm1', text: 'Hey Ali!', sender: true },
      { id: 'm2', text: 'Hi there!', sender: false },
      { id: 'm3', text: 'Are we meeting tomorrow?', sender: true },
      { id: 'm4', text: 'Yes, see you at 10!', sender: false },
    ],
  },
  {
    id: '4',
    name: 'Fatima Noor',
    lastMessage: 'Sure, I’ll send it.',
    time: 'Yesterday',
    avatar:
      'https://images.unsplash.com/flagged/photo-1578940991997-303f19ea31ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxMnx8dHVya2lzaCUyMGdpcmx8ZW58MXx8fHwxNjQzMjA2NjA1&ixlib=rb-1.2.1&q=80&w=1080',
    messages: [
      { id: 'm1', text: 'Hey Ali!', sender: true },
      { id: 'm2', text: 'Hi there!', sender: false },
      { id: 'm3', text: 'Are we meeting tomorrow?', sender: true },
      { id: 'm4', text: 'Yes, see you at 10!', sender: false },
    ],
  },
];

type Message = {
  id:string;
  text:string;
  sender:boolean
}

export default function ChatListScreen({ navigation }: { navigation: any }) {
  const [search, setSearch] = useState<string>('');

  const filteredUsers = USERS.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  const renderUser = ({
    item,
  }: {
    item: {
      id: string;
      avatar: string;
      name: string;
      lastMessage: string;
      messages:Message[];
      time: string;
    };
  }) => (
    <TouchableOpacity
      style={styles.userRow}
      onPress={() =>
        navigation.navigate('Chat', {
          userId: item.id,
          name: item.name,
          avatar:item.avatar,
          messages: item.messages,
        })
      }
    >
      <Image
        source={{ uri: item.avatar }}
        style={styles.avatar}
        resizeMode="cover"
      />
      <View style={styles.textSection}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.lastMessage}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search fellows..."
        value={search}
        onChangeText={setSearch}
        style={styles.searchInput}
      />
      <FlatList
        data={filteredUsers}
        keyExtractor={item => item.id}
        renderItem={renderUser}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgb(250, 250, 250)',
  },
  searchInput: {
    height: 60,
    borderWidth: 2,
    borderColor: '#ccc',
    paddingLeft: 10,
    boxShadow: 'rgba(0, 0, 0, 0.08) 0px 0px 0px;',
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 15,
    backgroundColor: '#fff',
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: 'rgb(210, 209, 209)',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  textSection: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  message: {
    color: '#212121',
  },
  time: {
    fontSize: 12,
    color: '#212121',
  },
});
