import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';


export default function ChatScreen() {
  const navigation = useNavigation();
  const route: any = useRoute();
  const { name, messages, avatar } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={styles.headerContainer}>
          <Image source={{ uri: avatar }} style={styles.avatar} />
          <Text style={styles.headerName}>{name}</Text>
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: 15 }}
          onPress={() => alert('Info clicked')}
        >
          <AntDesignIcon name="info-circle" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, avatar, name]);

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.sender ? styles.sender : styles.receiver,
            ]}
          >
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />
      <TextInput placeholder="Type here..." style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 12,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
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
  headerName: {
    fontSize: 16,
    fontWeight: '600',
  },
  messageContainer: {
    maxWidth: '70%',
    marginVertical: 6,
    padding: 12,
    borderRadius: 12,
  },
  sender: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgb(173, 218, 250);',
  },
  receiver: {
    alignSelf: 'flex-start',
    backgroundColor: '#EAEAEA',
  },
  messageText: {
    fontSize: 16,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
});
