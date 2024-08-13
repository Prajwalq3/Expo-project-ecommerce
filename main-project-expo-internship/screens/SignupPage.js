// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function SignupPage({ navigation }) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//     const [address, setaddress] = useState('');
//   const [error, setError] = useState('');

//   const handleSignup = async () => {
//     if (!name || !email || !password) {
//       setError('Please fill in all fields');
//       return;
//     }

//     const user = { name, email, password };
//     await AsyncStorage.setItem('user', JSON.stringify(user));
//     navigation.navigate('LoginPage');
//   };

//   return (
//     <ImageBackground source={{uri:'https://img.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148704189.jpg'}} style={styles.background}>
//       <View style={styles.container}>
//         <Text style={styles.heading}>Signup</Text>
//          <Text style={styles.dou}>Forget Hunger....</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Name"
//           value={name}
//           onChangeText={setName}
//         />
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
//         <Button title="Sign Up" onPress={handleSignup} />
//         <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
//           <Text style={styles.link}>Already have an account? Login</Text>
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
//   dou: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: 'green',
//     textAlign: 'center',
//   },
// });











import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignupPage({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    const user = { name, email, password, address };

    try {
      // Retrieve the current users list or initialize as an empty array
      const storedUsers = await AsyncStorage.getItem('users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];

      // Check if email already exists
      const existingUser = users.find((u) => u.email === email);
      if (existingUser) {
        setError('Email already exists');
        return;
      }

      // Add the new user to the array and save it
      users.push(user);
      await AsyncStorage.setItem('users', JSON.stringify(users));

      navigation.navigate('LoginPage');
    } catch (err) {
      setError('An error occurred during signup');
    }
  };

  return (
    <ImageBackground source={{uri:'https://img.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148704189.jpg'}} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}>Signup</Text>
        <Text style={styles.dou}>Forget Hunger....</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
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
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <Button title="Sign Up" onPress={handleSignup} />
        <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
          <Text style={styles.link}>Already have an account? Login</Text>
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
  dou: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'green',
    textAlign: 'center',
  },
});