import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';

class RideDetailsScreen extends Component {
  render() {
    const {
      containerStyle,
      infoContainerStyle,
      detailHeadingStyle,
      goBackButtonStyle,
      imageFormat,
    } = styles;

    return (
      <View style={containerStyle}>
        <View style={infoContainerStyle}>
          <Text style={detailHeadingStyle}>RIDE DETAILS</Text>
          <Image
            style={imageFormat}
            source={this.props.selectedPark.rides[0].rideImage}
          />
          <Text>Ride: {this.props.selectedPark.rides[0].rideName}</Text>
        </View>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Rides')}
          style={goBackButtonStyle}
        >
          <View>
            <Text>Back to Park List</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedPark: state.selectedPark,
  };
};

export default connect(mapStateToProps, null)(RideDetailsScreen);

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainerStyle: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  detailHeadingStyle: { fontSize: 20 },
  goBackButtonStyle: {
    backgroundColor: 'lightblue',
    width: '80%',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageFormat: {
    width: 400,
    height: 200,
    marginTop: 10,
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 10,
  },
});
