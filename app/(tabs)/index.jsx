import React from 'react';
import { StyleSheet, View } from 'react-native';
import Log from './log/Log';

export default function Index() {
  return (
    <View style={styles.container}>
      <Log />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
