import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Details extends Component {
  render() {
    return (
      <View>
        <Text>Details</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Screen 2')}
        >
          <View>
            <Text>Go to Parks</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Details;
