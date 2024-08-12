import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { getExpenses } from './Storage';  // Import the getExpenses function
import menuIcon from './assets/MenuIcon.png';
import addIcon from './assets/AddIcon.png';

const lightGreen = '#7ae582';
const darkGreen = '#40916c';
const black = '#040303';
const white = '#ffffff';
const blue = '#264653';
const yellow = '#ffb703';

const MainScreen = ({ route, navigation }) => {
  const { cashAmount, userId } = route.params || {};
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const storedExpenses = await getExpenses();
      setExpenses(storedExpenses);
    };

    fetchExpenses();
  }, []);

  const handleMenuPress = () => {
    console.log('Menu button pressed');
  };

  if (!route.params) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Hello User</Text>
          <Text style={styles.idText}>ID: {String(userId)}</Text>
        </View>
        <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
          <Image source={menuIcon} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <View style={styles.box}>
          <Text style={styles.boxTextHeading}>Cash Amount</Text>
          <Text style={styles.boxTextPara}>{String(cashAmount)}</Text> 
        </View>

        <View style={styles.box}>
          <Text style={styles.boxTextHeading}>Top Expenses</Text>
        </View>
      </View>

      <View style={styles.bigBox}>
        <Text style={styles.bigBoxText}>Graph</Text>
      </View>

      <View style={styles.wideBox}>
        <TouchableOpacity onPress={() => navigation.navigate('Expense')}>
          <View style={styles.circle}>
            <Image source={addIcon} style={styles.addIcon} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  headerTextContainer: {
    flexDirection: 'column',
  },
  headerText: {
    fontSize: 28,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'left',
    color: black,
  },
  idText: {
    fontSize: 14,
    color: black,
    marginTop: 5,
    fontFamily: 'Helvetica',
    textAlign: 'left',
  },
  menuButton: {
    padding: 10,
    marginBottom: 8,
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  box: {
    width: '48%',
    aspectRatio: 1,
    backgroundColor: blue,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  bigBox: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: blue,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20, // Space between the big box and wide box
  },
  wideBox: {
    width: '100%',
    height: '10%',
    backgroundColor: lightGreen,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // Adds shadow for Android
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 50, // Diameter of the circle
    height: 50, // Diameter of the circle
    borderRadius: 25, // Half of the width and height to make it a circle
    backgroundColor: yellow,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: {
    width: 25, // Adjust the size of the icon as needed
    height: 25, // Adjust the size of the icon as needed
  },
  boxTextHeading: {
    fontSize: 17,
    textAlign: 'left',
    color: yellow,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Helvetica',
  },
  boxTextPara: {
    fontSize: 23,
    color: white,
    textAlign: 'left',
    fontFamily: 'Helvetica',
  },
  bigBoxText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: yellow,
    textAlign: 'left',
    fontFamily: 'Helvetica',
  },
  add_icon_image: {
    fontSize: 35,
    fontWeight: 'bold',
    color: yellow,
  }
});
