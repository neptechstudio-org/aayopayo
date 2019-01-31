import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import ClosedCard from './ClosedCard';
import { SCREEN_HEIGHT, SCREEN_WIDTH, APP_COLOR } from '../../../../config';

class Closed extends Component {
  state = {};

  render() {
    const { main, updateModalValue } = this.props;
    // console.log('state in mainreducer', main);
    return (
      <View
        style={{
          padding: 5,
          height: 1000,
          width: SCREEN_WIDTH,
          elevation: 1,
          backgroundColor: '#f5f5f5',
          borderWidth: 2,
          borderColor: '#f5f5f5',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
          }}
        >
          <Text style={{ fontSize: 15, marginRight: 5, marginLeft: 5, color: '#000'}}>Closed</Text>
          <TouchableOpacity
            onPress={() => {
              updateModalValue('viewMoreContent', 'closedProduct');
              updateModalValue('viewMore', true);
            }}
          >
            <Text style={{ fontSize: 15, marginRight: 5, marginLeft: 5, color: APP_COLOR }}>View More</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: SCREEN_WIDTH,
            flexWrap: 'wrap',
            backgroundColor: '#f5f5f5',
          }}
        >
          {main.closedProduct.map((product, idx) => <ClosedCard key={idx} product={product} {...this.props} />)}
        </View>
      </View>
    );
  }
}
export default Closed;
