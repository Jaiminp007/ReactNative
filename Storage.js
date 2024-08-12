// storageUtils.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_PROFILE_KEY = 'userProfile';
const EXPENSES_KEY = 'expenses';

// Function to store the user profile in AsyncStorage
export const storeUserProfile = async (userProfile) => {
  try {
    await AsyncStorage.setItem(USER_PROFILE_KEY, JSON.stringify(userProfile));
    console.log('User profile saved successfully');
  } catch (error) {
    console.error('Error saving user profile:', error);
  }
};

// Function to retrieve the user profile from AsyncStorage
export const getUserProfile = async () => {
  try {
    const userProfileString = await AsyncStorage.getItem(USER_PROFILE_KEY);
    return userProfileString ? JSON.parse(userProfileString) : null;
  } catch (error) {
    console.error('Error retrieving user profile:', error);
    return null;
  }
};

// Function to store a new expense
export const addExpense = async (newExpense) => {
  try {
    const expensesString = await AsyncStorage.getItem(EXPENSES_KEY);
    const expenses = expensesString ? JSON.parse(expensesString) : [];
    
    // Add the new expense to the array
    expenses.push(newExpense);
    
    // Save the updated expenses array back to AsyncStorage
    await AsyncStorage.setItem(EXPENSES_KEY, JSON.stringify(expenses));
    console.log('New expense added successfully');
  } catch (error) {
    console.error('Error adding expense:', error);
  }
};

// Function to retrieve all expenses
export const getExpenses = async () => {
  try {
    const expensesString = await AsyncStorage.getItem(EXPENSES_KEY);
    return expensesString ? JSON.parse(expensesString) : [];
  } catch (error) {
    console.error('Error retrieving expenses:', error);
    return [];
  }
};
