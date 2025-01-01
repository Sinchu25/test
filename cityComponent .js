import React, { Component } from 'react';

class CityComponent extends Component {
  state = { city: 'Mysore' };

  componentDidMount() {
    setTimeout(() => this.setState({ city: 'Bangalore' }), 2000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.city !== this.state.city;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`City changed from ${prevState.city} to ${this.state.city}`);
  }

  render() {
    return <h1>City: {this.state.city}</h1>;
  }
}

export default CityComponent;
