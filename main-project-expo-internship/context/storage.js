import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUserData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('user');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.error(e);
  }
};


export const setUserLoggedOut = async () => {
  try {
    const user = await getUserData();
    if (user) {
      const updatedUser = { ...user, isLoggedIn: false };
      await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
    }
  } catch (e) {
    console.error(e);
  }
};
