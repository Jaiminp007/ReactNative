import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Alert,
} from 'react-native';
import MainScreen from './Main';
import ExpenseScreen from './Expense'; // Import the ExpenseScreen

import rupeeIcon from './assets/RupeeIcon.png';
import dollarIcon from './assets/DollarIcon.png';
import euroIcon from './assets/EuroIcon.png';
import poundIcon from './assets/PoundIcon.png';
import logo from './assets/Logo.png';

const Stack = createNativeStackNavigator();

const lightGreen = '#7ae582';
const darkGreen = '#40916c';
const black = '#040303';
const white = '#ffffff';

const HomeScreen = ({ navigation }) => {
  const [value, setValue] = useState('');
  const [id, setId] = useState(''); // Define the state for id
  const [currencyIcon, setCurrencyIcon] = useState(rupeeIcon); // Default currency icon

  const handleInputChange = (input) => {
    if (/^\d*$/.test(input)) {
      setValue(input);
    }
  };

  const handleIdChange = (input) => {
    if (/^\d*$/.test(input)) {
      setId(input);
    }
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const selectCurrency = () => {
    Alert.alert(
      'Select Currency',
      'Choose a currency',
      [
        {
          text: '₹ Rupees',
          onPress: () => setCurrencyIcon(rupeeIcon),
        },
        {
          text: '$ Dollar',
          onPress: () => setCurrencyIcon(dollarIcon),
        },
        {
          text: '€ Euro',
          onPress: () => setCurrencyIcon(euroIcon),
        },
        {
          text: '£ Pound',
          onPress: () => setCurrencyIcon(poundIcon),
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.textOne}>
          Ever wonder where all your cash goes? BudgeBuddy makes it easy to keep track of your physical cash so you can budget better and spend wisely.
        </Text>
        <Text style={styles.textTwo}>
          Enter Your Current Cash Amount to Get Started!
        </Text>
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={selectCurrency}>
            <Image source={currencyIcon} style={[styles.currencyIcon, { tintColor: white }]} />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={handleInputChange}
            keyboardType="numeric"
            placeholder="Type a number"
          />
        </View>
        <TextInput
          style={styles.idInput} // Use the new style for ID input
          value={id}
          onChangeText={handleIdChange}
          keyboardType="numeric"
          placeholder="Enter your ID"
        />
        <View style={styles.buttonContainer}>
            <Button
              title="Begin your Journey"
              onPress={() => {
                  console.log('Cash Amount:', value);
                  console.log('User ID:', id);
                  navigation.navigate('Main', { cashAmount: value, userId: id });
              }}
    color="white"
  />
</View>

      </View>
    </TouchableWithoutFeedback>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            gestureEnabled: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Expense" // Added this line to include the ExpenseScreen
          component={ExpenseScreen}
          options={{
            headerShown: false, // Hide header if you want it to match other screens
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#040303',
    paddingTop: 100,
  },
  logo: {
    width: 360,
    height: 115,
    marginBottom: 50,
  },
  textOne: {
    fontSize: 18,
    color: darkGreen,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: 'Helvetica',
    marginBottom: 50,
  },
  textTwo: {
    fontSize: 20,
    color: lightGreen,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: 'Helvetica',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginBottom: 20, // Adjusted spacing
  },
  currencyIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
    marginLeft: -20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    fontSize: 18,
    borderRadius: 4,
    color: white,
    fontFamily: 'Helvetica',
  },
  idInput: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    fontSize: 18,
    borderRadius: 4,
    color: white,
    fontFamily: 'Helvetica',
    marginTop: 20,
    marginBottom: 50,
  },
  buttonContainer: {
    marginTop: 20,
    width: '50%',
    height: 60,
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: darkGreen,
    fontFamily: 'bold',
    fontFamily: 'Helvetica',
  },
});
