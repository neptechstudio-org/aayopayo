import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import LiveCard from './LiveCard';

class Live extends Component {
  state = {};

  render() {
    const { main } = this.props;
    // console.log('state in mainreducer', main);
    return (
      <View style={{
        padding: 2,
        height: 215,
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
          zIndex: 5,
          backgroundColor: '#FFA5009f',
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        }}
        >
          <Text style={{ color: '#fff', fontSize: 15, marginRight: 5, marginLeft: 5 }}>Live Products</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {main.liveProduct.map((product, idx) => <LiveCard key={idx} product={product} {...this.props} />)}
        </ScrollView>
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
export default Live;
