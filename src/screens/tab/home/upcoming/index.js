import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import UpcomingCard from './UpComingCard';
import { APP_COLOR } from '../../../../config';

class Upcoming extends Component {
  state = {};

  render() {
    const { main, updateModalValue } = this.props;
    // console.log('state in mainreducer', main);
    return (
      <View style={{
        padding: 2,
        height: 245,
        elevation: 1,
        borderWidth: 2,
        borderColor: '#f5f5f5',
        margin: 5,
        backgroundColor: 'white',
      }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
          <Text style={{ fontSize: 15, marginRight: 5, marginLeft: 5, color: '#000000' }}>Upcoming</Text>
          <TouchableOpacity
            onPress={() => {
              updateModalValue('viewMore', true);
              updateModalValue('viewMoreContent', 'upcomingProduct');
            }}
          >
            <Text style={{ fontSize: 15, marginRight: 5, marginLeft: 5, color: APP_COLOR }}>View More</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ backgroundColor: '#f5f5f5' }}>
          {main.upcomingProduct.map((product, idx) => <UpcomingCard key={idx} product={product} {...this.props} />)}
        </ScrollView>
      </View>
    );
  }
}
export default Upcoming;
