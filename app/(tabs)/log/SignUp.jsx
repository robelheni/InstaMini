import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View,  TouchableWithoutFeedback } from 'react-native';
import { styles } from './Log';

import { useNavigation } from '@react-navigation/native';

export default function SignUp() {

  // username → keeps the current value typed by the user

  // setUsername → updates the value when the user types

  const navigation = useNavigation();
  const [email, setEmail]=useState('');
  const[password, setPassword] = useState('');
  const[userName, setUserName] = useState('');
  const[fullName, setFullName] = useState('');


  const confirmSignUp = () => {
    if(!email || !fullName || !userName || !password) {
      alert('Please fill all fields');
      return;
    }
  
    // add password rules here if needed
  
    navigation.navigate('Home');
  }

    return (
      <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
  
        <TextInput
          style={styles.input}
          placeholder="Email or Mobile number"
          placeholderTextColor="#888"
          value = {email}
          onChangeText = {setEmail}
        />

<TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#888"
          value = {fullName}
          onChangeText = {setFullName}
        />

<TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#888"
          value = {userName}
          onChangeText = {setUserName}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#888"
          value = {password}
          onChangeText = {setPassword}
        />
        
<TouchableOpacity style={styles.button} onPress = {confirmSignUp}>

<Text style={styles.buttonText}>Sign up</Text>
</TouchableOpacity>

  
        <TouchableOpacity onPress={() =>navigation.navigate('Login')}>
          <Text style={{ color: '#1DA1F2', marginTop: 10 }}>Back to Login</Text>
        </TouchableOpacity>
      </View>
      </TouchableWithoutFeedback>
    );
  }