import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

export default function GettingIntoPage({ navigation }) {
  return (
    <ImageBackground source={{uri:'https://w0.peakpx.com/wallpaper/302/120/HD-wallpaper-world-food-colors-comida-food-neon-pink-theme.jpg'}} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.welcome}>Synergy welcomes you..</Text>
        <Button title="---Home" onPress={() => navigation.navigate('SignupPage')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    
     color: 'tan',
     marginBottom: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
