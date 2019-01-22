import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import ClosedCard from './ClosedCard';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../config';

class Closed extends Component {
  state = {};

  render() {
    const { main } = this.props;
    // console.log('state in mainreducer', main);
    return (
      <View style={{
        padding: 2,
        display:'flex',
        flexGrow: 1,
        height: 800,
        width: SCREEN_WIDTH,
        elevation: 1,
        borderWidth: 2,
        borderColor: '#f5f5f5',
        margin: 5,
      }}
      >
        <View style={{
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          position: 'absolute',
          zIndex: 20,
          backgroundColor: '#FFA5009f',
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        }}
        >
          <Text style={{ color: '#fff', fontSize: 15, marginRight: 5, marginLeft: 5 }}>Closed Products</Text>
        </View>
        <ScrollView>
          <View style={{ flexDirection: 'row', width: SCREEN_WIDTH, display: 'flex', flexGrow: 1 }}>
            {main.closedProduct.map((product, idx) => <ClosedCard key={idx} product={product} {...this.props} />)}
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Closed;
