import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function Slider({ category, products }) {
  return (
    <View style={styles.slider}>
      <Text style={styles.category}>{category}</Text>
      <ScrollView horizontal>
        {products.map(product => (
          <TouchableOpacity key={product.id} style={styles.product} onPress={() => {}}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.name}>{product.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  slider: {
    marginVertical: 20,
  },
  category: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  product: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    marginTop: 10,
    textAlign: 'center',
  },
});