// MainTabs.js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatListScreen from '../screens/chat-list';
import ChatScreen from '../screens/chat';
import ProfileScreen from '../screens/profile';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();
const ChatStack = createNativeStackNavigator();

function ChatStackNavigator() {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name="ChatList"
        component={ChatListScreen}
        options={{ title: 'Messages' }}
      />
      <ChatStack.Screen name="Chat" component={ChatScreen} />
    </ChatStack.Navigator>
  );
}

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName = route.name === 'Chats' ? 'chat' : 'user';
          return <EntypoIcon name={iconName} size={size} color={color} /> ;
        },
      })}
    >
      <Tab.Screen name="Chats" component={ChatStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
