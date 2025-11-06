import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

import React, { useState } from 'react';
import { ActivityIndicator, Alert, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
const API_URL = 'http://192.168.0.186/insta_mini_backend';
export default function Log() {

      //hook to manage navigation inside this component
    const navigation = useNavigation();
    //usestate: used for so that your inputs would remember what the user typed

    //creates a state variable (username) and function to update it(setusername)

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //passwordVisible: toggle to show /hide password
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const [fontsLoaded] = useFonts({
      'Cookie-Regular': require('../../../assets/fonts/Cookie-Regular.ttf'), 
    });
    //async function so we can use await
    const handleLogin = async() => {
      console.log('LOGIN STARTED');

      if(!username || !password){
        console.log('Validation failed: missing fields');
        Alert.alert('Error', 'Please enter username/email and password');
    return;
      }
    

    console.log('starting login request...')
    setLoading(true);

    try {
      console.log('fetching:', `${API_URL}/login.php`);

      const response = await fetch(`${API_URL}/login.php`,{
          method: 'POST',
          headers: {'Content-Type': 'application/json',},

          body: JSON.stringify({
            username: username,
            password: password,

          }),

      });

       //Parse the JSON response
        const data = await response.json();
        console.log('Response data:', data);

        // Check if login worked
  if (data.success) {
    console.log('Login successful! Navigating to Home...');
    // Success! Navigate to Home and pass user data
    Alert.alert('Success', data.message, [
      {
        text: 'OK',
        onPress: () => {
          navigation.navigate('Home', { user: data.data });
        },
      },
    ]);
  } else {
    console.log('Login failed:', data.message);
    // Failed (wrong password, user not found, etc.)
    Alert.alert('Error', data.message);
  }
    }catch(error){

      console.log('Catch error:', error);
      Alert.alert(
        'Error',
        'Could not connect to server. Make sure XAMPP is running!'
      );
      console.error('Login error:', error);
    
    } finally {
        //  Always hide loading
        console.log('=== LOGIN ENDED ===');
        setLoading(false);
    }
  };
    //Return the ui of the login screen
  return (
      //touchablewithoutfeedback lets you tap outside the inputs to dimiss the keyboard
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        
      <View style={styles.container}>


        <Text style={styles.title}>Insta -Mini</Text>

        <Text style={styles.subtitle}></Text>

        <TextInput
          style={styles.input}
          placeholder="Phone number, Username or email address"
          placeholderTextColor="#888"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"  
          editable={!loading} 
        />

        <View style={{ width: '80%', marginBottom: 15, position: 'relative' }}>
          <TextInput
            style={{
              height: 45,
              backgroundColor: '#1e1e1e',
              borderRadius: 8,
              paddingHorizontal: 15,
              paddingRight: 45, 
              color: '#fff',
            }}
            placeholder="Password"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            //this where passwordvisisible connects with the built in component
            secureTextEntry={!passwordVisible}
            editable={!loading}
          />
          {/*TouchableOpacity = an invisible button with a fade animation when touched.*/}
          <TouchableOpacity 
          style={{ position: 'absolute', right: 10, top: 10 }} 
          ////* if it was false, it becomes true; if it was true, it becomes false*/
          onPress={() => setPasswordVisible(!passwordVisible)} >
            <Ionicons
              name={passwordVisible ? 'eye' : 'eye-off'}
              size={24}
              color="#1DA1F2"
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>Forgotten Password?</Text>



        <TouchableOpacity 
              style={[styles.button, loading && { opacity: 0.5 }]} 
              onPress={handleLogin}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text style={styles.buttonText}>Login</Text>
              )}
        </TouchableOpacity>

            
      <View style={{ position: 'absolute', bottom: 40, alignItems: 'center' }}>
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#333',
            marginBottom: 20,
          }}
        />
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: '#fff' }}>Don’t have an account? </Text>

             {/* Sign up button navigates to SignUp screen */}
            <TouchableOpacity onPress={() =>navigation.navigate('SignUp')}>
              <Text style={{ color: '#1DA1F2', fontWeight: 'bold' }}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>

    </TouchableWithoutFeedback>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    padding: 20,
  },
  title: {
    fontSize: 46,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    fontFamily: 'Cookie-Regular'
  },
  subtitle: {
    fontSize: 16,
    color: '#1DA1F2',
    marginBottom: 20,
    marginLeft: 120,
    
    
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
