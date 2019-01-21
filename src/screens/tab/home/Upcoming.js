import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UpcomingCard from './upcoming/UpcomingCard';

class Upcoming extends Component {

  state={};

  render() {
    const { main } = this.props;
    return (
      <View style={{ padding: 10 }}>
        {main.upcomingProduct.map((product, idx) => <UpcomingCard key={idx} product={product} />)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textSyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Upcoming;
