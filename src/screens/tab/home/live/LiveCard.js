import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Card, CardItem, Text, Left, Body, Button } from 'native-base';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../config';
import Timer from './Timer';

class LiveCarde extends Component {
  state = {};

  render() {
    const { product, updateMainValue } = this.props;
    const { name, image, id } = product;
    return (
      <Card style={{ width: 200, height: 200 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={{ uri: image }}
            resizeMode="stretch"
            style={{
              width: 90,
              height: 90,
            }}
          />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
            {name}
          </Text>
          <Timer endDate="2019-12-17" endTime="20:44:00" context={this.context} name={name} />
          <Button
            danger
            full
            onPress={() => updateMainValue('showProductDetails', id)}
            style={{ marginTop: 10 }}
          >
            <Text>
            Details
            </Text>
          </Button>
        </View>
      </Card>
    );
  }
}
export default LiveCarde;
