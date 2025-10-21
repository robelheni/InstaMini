import React, {useState} from 'react';
import {useFont} from 'expo-font'
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, } from 'react-native';
import { styles } from './Log';


export default function SignUp({ onBack }) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
  
        <TextInput
          style={styles.input}
          placeholder="Email or Mobile number"
          placeholderTextColor="#888"
        />

<TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#888"
        />

<TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#888"
        />
<TouchableOpacity style={styles.button}>

<Text style={styles.buttonText}>Sign up</Text>
</TouchableOpacity>

  
        <TouchableOpacity onPress={onBack}>
          <Text style={{ color: '#1DA1F2', marginTop: 10 }}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    );
  }