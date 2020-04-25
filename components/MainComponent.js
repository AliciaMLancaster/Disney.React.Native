import React, { Component } from 'react';
import Parks from '../navigation/screens/ParksScreen';
import { PARKS } from '../Shared/parks';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: PARKS,
    };
  }
  render() {
    return <Parks parks={this.state.parks} />;
  }
}

export default Main;
