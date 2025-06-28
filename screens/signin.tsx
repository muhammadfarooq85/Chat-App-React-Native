import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SigninScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.topSection}>
        <Image
          source={{
            uri: 'https://assets.api.uizard.io/api/cdn/stream/27aed81a-4097-404a-8711-0a79ef934474.png',
          }}
          style={styles.bgImage}
          resizeMode="cover"
        />
        <View style={styles.chatContainer}>
          <View style={[styles.chatBubble, styles.receiverChatBubbleColor]}>
            <Text style={styles.chatText}>Welcome Back!</Text>
          </View>
          <View style={[styles.chatBubble, styles.senderChatBubbleColor]}>
            <Text style={styles.chatText}>Please sign in.</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.mainHeading}>Sign in</Text>
        <View>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="john@example.com"
            placeholderTextColor="#212121"
          />
        </View>
        <View>
          <Text style={styles.label}>Passowrd:</Text>
          <TextInput
            style={styles.input}
            placeholder=" ******* "
            placeholderTextColor="#212121"
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.signinButton}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.isAccountExistText}>
            Don't have an account?{' '}
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text>Sign up</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSection: {
    flex: 0.5,
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
  mainHeading: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  chatContainer: {
    position: 'absolute',
    top: 20,
    left: 10,
    right: 10,
    gap: 20,
  },
  chatBubble: {
    padding: 10,
    borderRadius: 10,
    maxWidth: '75%',
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  receiverChatBubbleColor: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgb(250, 250, 250)',
  },
  senderChatBubbleColor: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgb(173, 218, 250)',
  },
  chatText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomSection: {
    flex: 0.5,
    padding: 20,
    gap: 20,
    justifyContent: 'center',
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
  },
  signinButton: {
    backgroundColor: '#262626',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    cursor: 'pointer',
  },
  buttonText: {
    fontWeight: 'medium',
    fontSize: 20,
    color: 'white',
  },
  isAccountExistText: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
