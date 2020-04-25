/*import React, { Component } from './node_modules/react';
import { Text, View } from 'react-native';
import { Card } from './node_modules/react-native-elements';
import { PARKS } from '../shared/parks';

function RenderPark({ park }) {
  //destructor
  if (park) {
    //makes sure it's not null or undefined; if truthy will execute return
    return (
      <Card
        featuredTitle={park.name}
        image={require('./images/magickingdom.jpeg')}
      >
        <Text style={{ margin: 10 }}>{park.description}</Text>
      </Card>
    );
  }
  return <View />; //if not a value park object; returns an empty view component
}

class ParkInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: PARKS,
    };
  }

  static navigationOptions = {
    title: 'Park Information',
  };

  render() {
    //navigation prop to get the id
    const parkId = this.props.navigation.getParam('parkId');
    //filter to pull the park out from the array we want
    const park = this.state.parks.filter((park) => park.id === parkId)[0];
    return <RenderPark park={park} />; //pass park object from above
  }
}

export default ParkInfo; */
