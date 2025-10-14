import React, { useState } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, } from 'react-native';

export default function Log() {

const [username, setUsername] = useState('');
  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    
    <View style={styles.container}>


      <Text style={styles.title}>InstaMini 👋</Text>

      <Text style={styles.subtitle}>This is your log screen</Text>

      <TextInput
        style={styles.input}
        placeholder="Phone number, Username or email address"
        placeholderTextColor="#888"
        value={username}
        onChangeText={setUsername}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>

      
    </View>

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#bbb',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 45,
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    color: '#fff',
    marginBottom: 15,

  },
  button: {
    backgroundColor: '#1DA1F2',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
