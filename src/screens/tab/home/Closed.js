import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import UpcomingCard from './upcoming/UpcomingCard';

class Closed extends Component {

  state = {};

  render() {
    const { main } = this.props;
    return (
      <ScrollView>
        <View style={{ padding: 10 }}>
          {main.closedProduct.map((product, idx) => <UpcomingCard key={idx} product={product} />)}
        </View>
      </ScrollView>
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
export default Closed;
