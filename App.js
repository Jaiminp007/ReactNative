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

import rupeeIcon from './assets/RupeeIcon.png'; // Adjust the path based on your folder structure
import dollarIcon from './assets/DollarIcon.png'; // Adjust the path based on your folder structure
import euroIcon from './assets/EuroIcon.png'; // Adjust the path based on your folder structure
import poundIcon from './assets/PoundIcon.png'; // Adjust the path based on your folder structure
import logo from './assets/Logo.png'; // Adjust the path based on your folder structure

const Stack = createNativeStackNavigator();

const lightGreen = '#7ae582'
const darkGreen = '#40916c';
const black = '#040303';
const white = '#ffffff';

const HomeScreen = ({ navigation }) => {
  const [value, setValue] = useState('');
  const [currencyIcon, setCurrencyIcon] = useState(rupeeIcon); // Default currency icon

  const handleInputChange = (input) => {
    if (/^\d*$/.test(input)) {
      setValue(input);
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
            <Image source={currencyIcon} style={[styles.currencyIcon, { tintColor:  white }]} />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={handleInputChange}
            keyboardType="numeric"
            placeholder="Type a number"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Begin your Journey"
            onPress={() => navigation.navigate('Main', {cashAmount: value})}
            color= "white"
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
    marginBottom: 50,
  },
  currencyIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
    marginLeft:-20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    fontSize: 18,
    borderRadius: 4,
    color: white ,
    fontFamily: 'Helvetica',
  },
  buttonContainer: {
    marginTop: 50,
    width: '50%',
    height: 60,
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: darkGreen,
    fontFamily: 'bold',
    fontFamily: 'Helvetica',
  },
});
