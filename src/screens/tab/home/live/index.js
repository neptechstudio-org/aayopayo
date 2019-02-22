import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Card } from 'native-base';
import LiveCard from './LiveCard';
import { APP_COLOR } from '../../../../config';

class Live extends Component {
  state = {};

  render() {
    const { main, updateModalValue } = this.props;
    // console.log('state in mainreducer', main);
    return (
      <Card style={{
        padding: 2,
        height: 260,
        elevation: 2,
        borderWidth: 2,
        borderColor: '#f5f5f5',
        margin: 5,
        backgroundColor: 'white',
      }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, backgroundColor: 'white'}}>
          <Text style={{ fontSize: 15, marginRight: 5, marginLeft: 5, color: '#000' }}>Live</Text>
          <TouchableOpacity
            onPress={() => {
              updateModalValue('viewMore', true);
              updateModalValue('viewMoreContent', 'liveProduct');
            }}
          >
            <Text style={{ fontSize: 13, textDecorationLine: 'underline', marginRight: 5, marginLeft: 5, color: APP_COLOR, marginTop: 5 }}>View More</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ backgroundColor: 'white', padding: 5 }}>
          {main.liveProduct.map((product, idx) => <LiveCard key={idx} product={product} {...this.props} />)}
        </ScrollView>
      </Card>
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
