// SYSTEM IMPORTS
import React, { Component } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ListItem } from 'react-native-elements';
// USER IMPORTS
import { PARKS } from '../../Shared/parks';
import { selectPark } from '../../redux/actionCreators';

class Parks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: PARKS,
    };

    this.selectNewPark = this.selectNewPark.bind(this);
  }

  selectNewPark(park) {
    this.props.selectPark(park);
    this.props.navigation.navigate('ParkDetailScreen');
  }

  render() {
    const renderParkItem = ({ item }) => {
      return (
        <TouchableOpacity onPress={() => this.selectNewPark(item)}>
          <ListItem
            title={item.name}
            subtitle={item.history}
            leftAvatar={{ source: item.image }}
          />
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

export default connect(null, mapDispatchToProps)(Parks);
