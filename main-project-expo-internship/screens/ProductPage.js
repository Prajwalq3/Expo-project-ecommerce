
import React, { useContext, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ImageBackground, Button, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Updated Picker import
import { DataContext } from '../context/DataContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome

export default function ProductPage({ navigation }) {
  const { productData, wishlist, addToWishlist, removeFromWishlist, addToCart } = useContext(DataContext);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Function to check if a product is in the wishlist
  const isProductInWishlist = (product) => {
    return wishlist.some(item => item.id === product.id);
  };

  // Function to toggle wishlist status of a product
  const toggleWishlist = (product) => {
    if (isProductInWishlist(product)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  // Filter products based on selected category
  const filteredProductData = selectedCategory
    ? productData.filter(product => product.category === selectedCategory)
    : productData;

  // Handle loading state
  if (!productData) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />;
  }

  return (
    <ImageBackground
      source={{ uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/85821267-c01e-47bd-9c55-4241e46b224f/d1t2fqe-5bdc7ba6-2c43-4247-9c9e-688db9d99756.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg1ODIxMjY3LWMwMWUtNDdiZC05YzU1LTQyNDFlNDZiMjI0ZlwvZDF0MmZxZS01YmRjN2JhNi0yYzQzLTQyNDctOWM5ZS02ODhkYjlkOTk3NTYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.es9OxAQ1ZeznYUCXhdXmGLU_2iOp9X3We96DuSfHi4c' }}
      style={styles.background}
    >
      <Navbar />
      <View style={styles.container}>
        <View style={styles.filterContainer}>
          <Text style={styles.filterHeading}>Filter.</Text>
          <Picker
            selectedValue={selectedCategory}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}
          >
            <Picker.Item label="All" value="" />
            <Picker.Item label="fruits-veges" value="fruits-veges" />
            <Picker.Item label="nonveg" value="nonveg" />
            <Picker.Item label="veg" value="veg" />
            <Picker.Item label="Grocery" value="Grocery" />
          </Picker>
        </View>
        <View style={styles.productListContainer}>
          <Text style={styles.heading}>Products</Text>
          <FlatList
            data={filteredProductData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.productContainer}>
                <Image
                  source={{ uri: item.image || 'https://fallback-image-url.jpg' }}
                  style={styles.image}
                />
                <View style={styles.productDetailsContainer}>
                  <Text style={styles.productTitle}>{item.title || 'No Title'}</Text>
                  <Text>{item.category || 'No Category'}</Text>
                  <Text>{item.description || 'No Description'}</Text>
                  <Text>${item.price ? item.price.toFixed(2) : 'N/A'}</Text>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => toggleWishlist(item)}>
                      <Icon
                        name="heart"
                        size={30}
                        color={isProductInWishlist(item) ? "#ff0000" : "#808080"}
                        style={styles.icon}
                      />
                    </TouchableOpacity>
                    <Button title="Add to Cart" onPress={() => addToCart(item)} />
                  </View>
                </View>
              </View>
            )}
          />
        </View>
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
    flexDirection: 'row',
  },
  filterContainer: {
    width: '20%',
    padding: 16,
  },
  productListContainer: {
    width: '85%',
    padding: 16,
  },
  filterHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  picker: {
    height: 50,
    width: '100%',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 8,
    padding: 10,
    alignItems: 'flex-start',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 14,
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
    alignItems: 'center',
    marginTop: 12,
  },
  icon: {
    marginRight: 10,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

