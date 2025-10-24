import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

import React, { useState } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, } from 'react-native';

import { useNavigation } from '@react-navigation/native';
export default function Log() {

      //hook to manage navigation inside this component
    const navigation = useNavigation();
    //usestate: used for so that your inputs would remember what the user typed

    //creates a state variable (username) and function to update it(setusername)

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //passwordVisible: toggle to show /hide password
    const [passwordVisible, setPasswordVisible] = useState(false);

    const [fontsLoaded] = useFonts({
      'Cookie-Regular': require('../../../assets/fonts/Cookie-Regular.ttf'), 
    });

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
          />
          {/*TouchableOpacity = an invisible button with a fade animation when touched.*/}
          <TouchableOpacity style={{ position: 'absolute', right: 10, top: 10 }} 
          onPress={() => setPasswordVisible(!passwordVisible)} > {/* if it was false, it becomes true; if it was true, it becomes false*/}
            <Ionicons
              name={passwordVisible ? 'eye' : 'eye-off'}
              size={24}
              color="#1DA1F2"
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>Forgotten Password?</Text>



        <TouchableOpacity style={styles.button}>

          <Text style={styles.buttonText}>Login</Text>
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
