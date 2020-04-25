/*import React, { Component } from './node_modules/react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from './node_modules/react-native-elements';
import { PARKS } from '../shared/parks';
import { REVIEWS } from '../shared/reviews';

function RenderItem({ item }) {
  //expect to pass an item that will destructure from the props objects
  if (item) {
    //if truthy returns a card
    return (
      <Card
        featuredTitle={item.name}
        image={require('./images/epcot.jpeg')} //will get from server later
      >
        <Text style={{ margin: 10 }}>{item.description}</Text>
      </Card>
    );
  }
  return <View />;
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //bring data in the main component state with a constructor
      parks: PARKS,
      reviews: REVIEWS,
    };
  }

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      //render groups or lists or items...loads all of child components at once vs flat list which does one part of a list is rendered at a time
      <ScrollView>
        <RenderItem
          item={this.state.parks.filter((park) => park.featured)[0]} //use filter to find the featured campsite
        />
        <RenderItem
          item={this.state.reviews.filter((review) => review.featured)[0]} //use filter to find the partner campsite
        />
      </ScrollView>
    );
  }
}

export default Home;
*/
