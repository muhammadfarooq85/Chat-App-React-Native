import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native';

export default function ProfileScreen() {
  const [name, setName] = useState<string>('');
  const [editedName, setEditedName] = useState<string>(name);

  const handleChangeName = () => {
    setName(editedName);
    Alert.alert('Success', 'Name updated successfully!');
  };

  const handleChangePassword = () => {
    Alert.alert('Change Password', 'Redirect to change password screen.');
    // You can navigate to another screen here
  };

  const handleSignOut = () => {
    Alert.alert('Sign Out', 'You have been signed out.');
    // Call sign out logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHw2fHxQZW9wbGV8ZW58MXx8fHwxNjQzMDE1MjM2&ixlib=rb-1.2.1&q=80&w=1080',
        }}
        height={50}
        width={50}
        resizeMode="cover"
        style={{ borderRadius: 25 }}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Change Profile Picture</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={editedName}
          onChangeText={setEditedName}
          placeholder=" John Doe"
           placeholderTextColor="#212121"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleChangeName}>
        <Text style={styles.buttonText}>Change Name</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          value={editedName}
          onChangeText={setEditedName}
          placeholder=" ******* "
           placeholderTextColor="#212121"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    gap: 10,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 20,
    fontSize: 16,
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
