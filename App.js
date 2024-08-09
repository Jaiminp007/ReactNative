import * as React from 'react';
import { useState } from 'react'; // Import useState from React
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, TextInput, StyleSheet, Image } from 'react-native';
import SampleScreen from './Sample'; // Adjust this path based on your folder structure

// Import the local image
import logo from './assets/Logo.png'; // Adjust the path based on your folder structure

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [value, setValue] = useState('');

  const handleInputChange = (input) => {
    // Validate to ensure only numbers are entered
    if (/^\d*$/.test(input)) {
      setValue(input);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={logo} // Use the imported local image
      />
      <Text style={styles.textOne}>
        Ever wonder where all your cash goes? BudgeBuddy makes it easy to keep track of your physical cash so you can budget better and spend wisely
      </Text>
      <Text style={styles.textTwo}>
        Enter Your Current Cash Amount to Get Started!
      </Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={handleInputChange}
        keyboardType="numeric"
        placeholder="Type a number"
      />
      <Text style={styles.valueText}>Value: {value}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Begin your Journey"
          onPress={() => navigation.navigate('Sample')}
          color="white"
        />
      </View>
    </View>
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
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="Sample" 
          component={SampleScreen} 
          options={{
            gestureEnabled: false,
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
    backgroundColor: 'black',
    paddingTop: 100,
  },
  logo: {
    width: 100, // Adjust the size as needed
    height: 100, // Adjust the size as needed
    marginBottom: 20, // Space between the logo and the next element
  },
  textOne: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: 'Helvetica',
    marginBottom: 20, // Space between text elements
  },
  textTwo: {
    fontSize: 20,
    color: 'lightblue',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: 'Helvetica',
    marginBottom: 20, // Space between text elements
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    fontSize: 18,
    borderRadius: 4,
    color: 'white',
    marginBottom: 20, // Space between input and the next element
  },
  valueText: {
    marginTop: 16,
    fontSize: 18,
    color: 'lightblue',
    marginBottom: 20, // Space between value text and the button
  },
  buttonContainer: {
    width: '80%',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'green',
  },
});
