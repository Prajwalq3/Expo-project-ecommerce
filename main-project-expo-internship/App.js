// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DataProvider } from './context/DataContext';
import HomePage from './screens/HomePage';
import ProductPage from './screens/ProductPage';
import WishlistPage from './screens/WishlistPage';
import CartPage from './screens/CartPage';
import LoginPage from './screens/LoginPage';
import SignupPage from './screens/SignupPage';
import ConfirmationPage from './screens/ConfirmationPage';
import GettingIntoPage from './screens/GettingIntoPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="GettingIntoPage">
          <Stack.Screen name="GettingIntoPage" component={GettingIntoPage} />
          <Stack.Screen name="SignupPage" component={SignupPage} />
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="ProductPage" component={ProductPage} />
          <Stack.Screen name="WishlistPage" component={WishlistPage} />
          <Stack.Screen name="CartPage" component={CartPage} />
          <Stack.Screen name="ConfirmationPage" component={ConfirmationPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}
