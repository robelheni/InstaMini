import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Log from './log/Log';
import SignUp from './log/SignUp';

export default function Index() {
  const [currentScreen, setCurrentScreen] = useState('Log'); // default screen

  return (
    <View style={styles.container}>
      {currentScreen === 'Log' && <Log onSignUp={() => setCurrentScreen('SignUp')} />}
      {currentScreen === 'SignUp' && <SignUp onBack={() => setCurrentScreen('Log')} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
