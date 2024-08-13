import React, { useState, useContext } from 'react';
import { View, Text, TextInput,StyleSheet, ImageBackground, TouchableOpacity, Modal, Button, Alert ,SafeAreaView,
  ScrollView, } from 'react-native';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { DataContext } from '../context/DataContext'; // Import DataContext




export default function ConfirmationPage({ navigation }) {


 const [address, setaddress] = useState('');
 
  const [paymentMethod, setPaymentMethod] = useState('');
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility
  const [orderId, setOrderId] = useState(null); // State for the generated order ID
  const { clearCart } = useContext(DataContext); // Access clearCart function

  // Function to generate a random order ID
  const generateOrderId = () => Math.floor(Math.random() * 1000000);

  
  const handleConfirmOrder = () => {
    if (!paymentMethod) {
      Alert.alert('Please select a payment method');
      return;
    }

    const id = generateOrderId();
    setOrderId(id);
    setModalVisible(true); // Show the modal
    clearCart(); // Clear the cart
    // navigation.navigate('HomePage'); // Navigate only after closing the modal
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    navigation.navigate('HomePage'); // Navigate to HomePage after closing the modal
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL2pvYjE4MTVkLXJlbWl4LTA2YS1hLWQuanBn.jpg' }} 
      style={styles.background}
    >
      <Navbar />





<SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>


      
      
      <View style={styles.container}>
        <Text style={styles.heading}>order-Confirmation</Text>





<View style={styles.conta}>
        <View style={styles.box}>
        
          <TextInput
            style={styles.input}
            placeholder="Enter your address"
            value={address}
            onChangeText={setaddress}
          />

          </View>
      </View>





        <View style={styles.detailsContainer}>
          <Text style={styles.paymentHeading}>Select Payment Method:</Text>
          <View style={styles.paymentOptions}>
            <TouchableOpacity 
              style={[styles.paymentOption, paymentMethod === 'Cash on Delivery' && styles.selectedPaymentOption]}
              onPress={() => setPaymentMethod('Cash on Delivery')}
            >
              <Text style={styles.paymentOptionText}>Cash on Delivery</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.paymentOption, paymentMethod === 'Credit Card' && styles.selectedPaymentOption]}
              onPress={() => setPaymentMethod('Credit Card')}
            >
              <Text style={styles.paymentOptionText}>Credit Card</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.paymentOption, paymentMethod === 'Debit Card' && styles.selectedPaymentOption]}
              onPress={() => setPaymentMethod('Debit Card')}
            >
              <Text style={styles.paymentOptionText}>Debit Card</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.paymentOption, paymentMethod === 'PayPal' && styles.selectedPaymentOption]}
              onPress={() => setPaymentMethod('PayPal')}
            >
              <Text style={styles.paymentOptionText}>PayPal</Text>
            </TouchableOpacity>

          </View>

 <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmOrder}>
            <Text style={styles.confirmButtonText}>Confirm Order</Text>  
          </TouchableOpacity>

        </View>

        
      </View>

      {/* Modal for order confirmation */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>Order Confirmation</Text>
            <Text style={styles.modalText}>Order placed successfully!</Text>
            <Text style={styles.modalText}>Order ID: {orderId}</Text>
            <Button title="OK" onPress={handleCloseModal} />
          </View>
        </View>   
      </Modal>





</ScrollView>
    </SafeAreaView>




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
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  paymentHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paymentOptions: {
    marginBottom: 20,
  },
  paymentOption: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedPaymentOption: {
    backgroundColor: '#007BFF',
  },
  paymentOptionText: {
    color: '#000',
  },
  confirmButton: {
    padding: 15,
    backgroundColor: '#28a745',
    borderRadius: 5,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },




 box: {
    width: '80%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,

  },
  conta: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
