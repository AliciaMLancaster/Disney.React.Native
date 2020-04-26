import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.detailHeadingStyle}>Walt Disney World</Text>
        <Text>The Most Magical Place on Earth</Text>
        <Image
          style={styles.imageFormat}
          source={require('../../components/images/waltdisneyworld.jpeg')}
        />
        <Text style={styles.parkName}>Magic Kingdom</Text>
        <Text style={styles.parkHours}>Park Hours: 9:00 am - 10:00 pm</Text>
        <Text style={styles.parkName}>Animal Kingdom</Text>
        <Text style={styles.parkHours}> Park Hours:9:00 am - 8:00 pm</Text>
        <Text style={styles.parkName}>Epcot</Text>
        <Text style={styles.parkHours}>Park Hours: 9:00 am - 9:00 pm</Text>
        <Text style={styles.parkName}>Hollywood Studios</Text>
        <Text style={styles.parkHours}>Park Hours: 8:00 am - 8:30 pm</Text>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageFormat: {
    width: 400,
    height: 200,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 10,
  },
  detailHeadingStyle: {
    fontSize: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  parkName: {
    backgroundColor: 'lightblue',
    marginBottom: 10,
  },
  parkHours: {
    marginBottom: 10,
  },
});
