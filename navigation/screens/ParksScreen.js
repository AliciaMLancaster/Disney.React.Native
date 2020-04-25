import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem, Tile } from 'react-native-elements';
import { PARKS } from '../../Shared/parks';

class Parks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: PARKS,
    };
  }
  render() {
    const renderParkItem = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          leftAvatar={{ source: item.image }}
        />
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

export default Parks;
