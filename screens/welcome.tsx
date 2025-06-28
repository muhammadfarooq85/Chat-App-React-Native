import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WelcomeScreen({ navigation }: { navigation: any }) {
  console.log('Dimensions ===>', Dimensions.get('window').width);
  console.log('navigation ===>', navigation);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://assets.api.uizard.io/api/cdn/stream/78598bf5-07f7-4838-b711-8bf37816e1a1.png',
          }}
          resizeMode="cover"
          style={styles.bgimage}
        />

        <View style={styles.chatContainer}>
          <View style={[styles.chatBubble, styles.receiverChatBubbleColor]}>
            <Text style={styles.chatText}>Farooq! Nice to hear from you.</Text>
          </View>
          <View style={[styles.chatBubble, styles.senderChatBubbleColor]}>
            <Text style={styles.chatText}>Hey! Great to see you too.</Text>
          </View>
          <View style={[styles.chatBubble, styles.receiverChatBubbleColor]}>
            <Text style={styles.chatText}>How have you been?</Text>
          </View>
          <View style={[styles.chatBubble, styles.senderChatBubbleColor]}>
            <Text style={styles.chatText}>Doing well, thanks!</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <View>
          <Text style={styles.mainHeading}>NexChat</Text>
          <Text style={styles.paragraph}>
            Talk, text and share your ideans as much as you can - all of it
            free.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Signin')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 0.7,
  },
  bgimage: {
    flex: 1,
  },
  chatContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    justifyContent: 'flex-end',
    gap: 40,
  },
  chatBubble: {
    padding: 10,
    borderRadius: 8,
    maxWidth: '75%',
  },
  chatText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  receiverChatBubbleColor: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgb(255, 209, 92)',
  },
  senderChatBubbleColor: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgb(255, 134, 66)',
  },
  bottomSection: {
    flex: 0.2,
    padding: 20,
    gap: 20,
    backgroundColor: 'white',
  },
  mainHeading: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 20,
  },
  button: {
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
});
