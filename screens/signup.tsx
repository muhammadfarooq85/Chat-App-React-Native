import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './signin';

export default function SignupScreen({ navigation }: { navigation: any }) {
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
            <Text style={styles.chatText}>Join NexChat!</Text>
          </View>
          <View style={[styles.chatBubble, styles.senderChatBubbleColor]}>
            <Text style={styles.chatText}>Create your account</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.mainHeading}>Sign up</Text>
        <View>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            placeholder=" John Doe"
            placeholderTextColor="#212121"
          />
        </View>
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
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        <Text style={styles.isAccountExistText}>
          Already have an account?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <Text>Sign in</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </SafeAreaView>
  );
}
