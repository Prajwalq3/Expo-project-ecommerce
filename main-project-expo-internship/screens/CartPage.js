import React, { useContext } from 'react';
import { View, Text, FlatList, Button, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { DataContext } from '../context/DataContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CartPage({ navigation }) {
  const { cart, removeFromCart } = useContext(DataContext);

  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  return (
    <ImageBackground
      source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/013/214/410/small_2x/food-manu-and-background-old-free-vector.jpg' }}
      style={styles.background}
    >
      <Navbar />
      <View style={styles.container}>
        {cart.length === 0 ? (
          <View style={styles.emptyCartContainer}>
            <Text style={styles.emptyCartText}>Your cart is empty!</Text>
            <TouchableOpacity style={styles.goToProductsButton} onPress={() => navigation.navigate('ProductPage')}>
              <Text style={styles.goToProductsButtonText}>Go to Products</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <Text style={styles.heading}>Cart</Text>
            <FlatList
              data={cart}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.productContainer}>
                  <Image source={{ uri: item.image }} style={styles.image} />
                  <View style={styles.productDetailsContainer}>
                    <Text style={styles.productTitle}>{item.name}</Text>
                    <Text>{item.category}</Text>
                    <Text>${item.price.toFixed(2)}</Text>
                    <Button title="Remove from Cart" onPress={() => removeFromCart(item.id)} />
                  </View>
                </View>
              )}
            />
            <Text style={styles.totalAmount}>Total: ${totalAmount.toFixed(2)}</Text>
            <Button title="Place Order" onPress={() => navigation.navigate('ConfirmationPage')} />
          </>
        )}
      </View>
      <Footer />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  goToProductsButton: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  goToProductsButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Translucent background
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    marginRight: 16,
  },
  productDetailsContainer: {
    flex: 1,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});
