import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';

class ParkDetailsScreen extends Component {
  render() {
    const {
      containerStyle,
      infoContainerStyle,
      detailHeadingStyle,
      goBackButtonStyle,
    } = styles;

    return (
      <View style={containerStyle}>
        <View style={infoContainerStyle}>
          <Text style={detailHeadingStyle}>Details</Text>
          <Image source={this.props.selectedPark.image} />
          <Text>Park: {this.props.selectedPark.name}</Text>
          <Text>Description: {this.props.selectedPark.description}</Text>
        </View>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Parks')}
          style={goBackButtonStyle}
        >
          <View>
            <Text>Back to Parks</Text>
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

export default connect(mapStateToProps, null)(ParkDetailsScreen);

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
});
