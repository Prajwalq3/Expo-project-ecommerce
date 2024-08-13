import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getUserData, setUserLoggedOut } from '../context/storage'; // Adjust the import path as needed
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Navbar() {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUserData();
      setUser(userData);
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    await setUserLoggedOut();
    setUser(null);
    navigation.navigate('LoginPage');
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
        <Text style={styles.navItem}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ProductPage')}>
        <Text style={styles.navItem}>Products</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('WishlistPage')}>
        <Text style={styles.navItem}>Wishlist</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CartPage')}>
        <Text style={styles.navItem}>Cart</Text>
      </TouchableOpacity>
      {user ? (
        <View style={styles.userContainer}>
          <TouchableOpacity style={styles.userDetails} onPress={() => navigation.navigate('UserProfilePage')}>
            <Icon name="user" size={20} color="#87CEEB" />
          </TouchableOpacity>


          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.logoutItem}>Logout</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
          <Text style={styles.navItem}>Login/Signup</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  logoutItem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
});