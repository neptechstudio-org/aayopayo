import React from 'react';
import { Header, Right, Body, Text, Icon } from 'native-base';
import { APP_COLOR, APP_TITLE_TEXT_COLOR } from '../../../../../config';

export default ({ updateMainValue }) => (
  <Header style={{ backgroundColor: APP_COLOR }}>
    <Body>
      <Text style={{ color: APP_TITLE_TEXT_COLOR, fontSize: 20 }}>Product Details</Text>
    </Body>
    <Right>
      <Icon name="close" onPress={() => updateMainValue('showProductDetails', null)} style={{ color: 'white' }} />
    </Right>
  </Header>
);
