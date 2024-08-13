import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>About Us-Eat-Repeat!!!</Text>
       <Text style={styles.footerText}>For any kind of problem call on this number-9302942991</Text>
    <Text style={styles.footerText}> share your order ID please!! </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 60,
    backgroundColor: 'tan',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 10,
  },
});