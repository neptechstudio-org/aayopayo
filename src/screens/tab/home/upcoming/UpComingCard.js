import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Card, Text, Button } from 'native-base';

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
              width: 100,
              height: 100,
            }}
          />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
            {name}
          </Text>
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
