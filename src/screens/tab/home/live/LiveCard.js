import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Text, Left, Body, Button } from 'native-base';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../config';
import Timer from './Timer';

class LiveCarde extends Component {
  state = {};

  render() {
    const { product, updateMainValue } = this.props;
    const { name, image, id } = product;
    return (
      <Card>
        <CardItem cardBody style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image
            source={{ uri: image }}
            resizeMode="stretch"
            style={{
              width: SCREEN_WIDTH * 0.8,
              height: SCREEN_HEIGHT * 0.4,
            }}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Body>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                {name}
              </Text>
              <Timer endDate="2019-12-17" endTime="20:44:00" context={this.context} name={name} />
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Left>
            <Body>
              <Button danger full onPress={() => updateMainValue('showProductDetails', id)}>
                <Text>
                Details
                </Text>
              </Button>
            </Body>
          </Left>
        </CardItem>
      </Card>
    );
  }
}
export default LiveCarde;
