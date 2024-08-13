// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function LoginPage({ navigation }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async () => {
//     if (!email || !password) {
//       setError('Please fill in all fields');
//       return;
//     }

//     const storedUser = await AsyncStorage.getItem('user');
//     const user = storedUser ? JSON.parse(storedUser) : null;

//     if (user && user.email === email && user.password === password) {
//       navigation.navigate('HomePage');
//     } else {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <ImageBackground source={{uri:'https://res.cloudinary.com/dzdgpwtox/image/upload/w_600,c_scale,f_auto,q_auto/v1688348245/designer-tool-uploads/bucket_3532/1688348243196.png'}} style={styles.background}>
//       <View style={styles.container}>
//         <Text style={styles.heading}>Login...</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />
//         {error ? <Text style={styles.error}>{error}</Text> : null}
//         <Button title="Login" onPress={handleLogin} />
//         <TouchableOpacity onPress={() => navigation.navigate('SignupPage')}>
//           <Text style={styles.link}>Don't have an account? Sign Up</Text>
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//   },
//   container: {
//     padding: 16,
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     margin: 16,
//     borderRadius: 8,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     borderBottomWidth: 1,
//     marginBottom: 20,
//     padding: 8,
//     fontSize: 16,
//   },
//   error: {
//     color: 'red',
//     marginBottom: 20,
//   },
//   link: {
//     color: 'blue',
//     marginTop: 20,
//     textAlign: 'center',
//   },
// });












import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const storedUsers = await AsyncStorage.getItem('users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];

      // Check if the user exists with the given credentials
      const user = users.find((u) => u.email === email && u.password === password);

      if (user) {
        navigation.navigate('HomePage');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred during login');
    }
  };

  return (
    <ImageBackground source={{uri:'https://res.cloudinary.com/dzdgpwtox/image/upload/w_600,c_scale,f_auto,q_auto/v1688348245/designer-tool-uploads/bucket_3532/1688348243196.png'}} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}>Login...</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <Button title="Login" onPress={handleLogin} />
        <TouchableOpacity onPress={() => navigation.navigate('SignupPage')}>
          <Text style={styles.link}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
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
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    margin: 16,
    borderRadius: 8,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 8,
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginBottom: 20,
  },
  link: {
    color: 'blue',
    marginTop: 20,
    textAlign: 'center',
  },
});