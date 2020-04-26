import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { ListItem, Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//USER IMPORTS
import { PARKS } from '../../Shared/parks';
import { selectPark } from '../../redux/actionCreators';

class Rides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: PARKS,
    };
    this.selectNewPark = this.selectNewPark.bind(this);
  }

  selectNewPark(park) {
    this.props.selectPark(park);
    this.props.navigation.navigate('RideDetailsScreen');
  }

  render() {
    const renderParkItem = ({ item }) => {
      return (
        <TouchableOpacity onPress={() => this.selectNewPark(item)}>
          <ListItem title={item.name} />
        </TouchableOpacity>
      );
    };
    return (
      <FlatList
        data={this.state.parks}
        renderItem={renderParkItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      selectPark,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(Rides);
