import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Keyboard,
  Platform,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './Log';

import { useNavigation } from '@react-navigation/native';

// Automatically use correct backend URL depending on where you run the app
const API_URL =
  Platform.OS === 'android' || Platform.OS === 'ios'
    ? 'http://192.168.0.186/insta_mini_backend' // use your local IP for phone
    : 'http://localhost/insta_mini_backend';     // use localhost for web/simulator
export default function SignUp() {

  // username → keeps the current value typed by the user

  // setUsername → updates the value when the user types

  const navigation = useNavigation();
  const [email, setEmail]=useState('');
  const[password, setPassword] = useState('');
  const[userName, setUserName] = useState('');
  const[fullName, setFullName] = useState('');
  //to track if we're waiting for the server
  const[loading, setLoading] = useState(false);

  //async () => = Make function asynchronous (so we can use await)
  const confirmSignUp = async() => {
    if(!email || !fullName || !userName || !password) {
      Alert.alert('Please fill all fields');
      return;
    }
      //show loading
    setLoading(true);
  

    //calling the backend

    try{
      const response = await fetch(`${API_URL}/signup.php`, {
        method:'POST',
        headers :{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email:email,
          fullName: fullName,
          userName: userName,
          password: password,
        }),
      });

      //get the response
      const data  = await response.json();

      //Check if it worked
    if (data.success) {
     // setLoading(false);
      Alert.alert('Success', data.message, [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Login'),
        },
      ]);
    
    
  
    } else {
      Alert.alert('Error', data.message);
    }
  } catch (error) {
    //  Handle errors
    Alert.alert('Error', 'Could not connect to server. Is XAMPP running?');
    console.error('Signup error:', error);
  } finally {
    //  Hide loading
    setLoading(false);
  }
};
    
    
  
    return (
      <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <View style={{ alignItems: 'center', width: '100%' }}>
        <Text style={styles.title}>Sign Up</Text>
  
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          value = {email}
          onChangeText = {setEmail}
          autoCapitalize="none"
          editable={!loading}
        />

<TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#888"
          value = {fullName}
          onChangeText = {setFullName}
          autoCapitalize="none"
          editable={!loading}
        />

<TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#888"
          value = {userName}
          onChangeText = {setUserName}
          autoCapitalize="none"
          editable={!loading}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#888"
          value = {password}
          onChangeText = {setPassword}
          autoCapitalize="none"
          editable={!loading}
        />
        
  <TouchableOpacity 
    style={[styles.button, loading && { opacity: 0.5 }]} 
    onPress={confirmSignUp}
    disabled={loading}
>
  {loading ? (
    <ActivityIndicator color="white" />
  ) : (
    <Text style={styles.buttonText}>Sign up</Text>
  )}
</TouchableOpacity>

  
        <TouchableOpacity onPress={() =>navigation.navigate('Login')}
          disabled={loading}
          >
          <Text style={{ color: '#1DA1F2', marginTop: 10 }}>Back to Login</Text>
        </TouchableOpacity>
      </View>
      </Pressable>
    );
  }