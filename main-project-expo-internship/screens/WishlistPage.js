import React, { useContext } from 'react';
import { View, Text, FlatList, Button, Image, StyleSheet, ImageBackground } from 'react-native';
import { DataContext } from '../context/DataContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function WishlistPage({ navigation }) {
  const { wishlist, removeFromWishlist, addToCart } = useContext(DataContext);

  const handleGoToProducts = () => {
    navigation.navigate('ProductPage'); // Adjust the route name to match your navigation setup
  };

  return (
    <ImageBackground
      source={{ uri: 'https://images.template.net/227776/asian-food-background-edit-online.jpg' }}
      style={styles.background}
    >
      <Navbar />
      <View style={styles.container}>
        <Text style={styles.heading}>Wishlist </Text>
        {wishlist.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Your wishlist is empty</Text>
            <Button title="Go to Products" onPress={handleGoToProducts} />
          </View>
        ) : (
          <FlatList
            data={wishlist}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.productContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.productDetailsContainer}>
                  <Text style={styles.productTitle}>{item.title}</Text>
                  <Text>{item.category}</Text>
                  <Text>${item.price.toFixed(2)}</Text>
                  <View style={styles.buttonContainer}>
                    <Button title="Remove" onPress={() => removeFromWishlist(item.id)} />
                    <Text style={styles.emptyText}>:::</Text>
                    <Button title="Add to Cart" onPress={() => addToCart(item)} />
                  </View>
                </View>
              </View>
            )}
          />
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
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: 'white',
    fontSize: 30,
    marginBottom: 10,
  },
});
