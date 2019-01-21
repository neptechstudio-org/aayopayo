import React from 'react';
import {
  Header, Right, Body, Text, Icon,
} from 'native-base';
import PropTypes from 'prop-types';
import { APP_COLOR } from '../../../config';

export default ({ updateModalValue }) => (
  <Header style={{ backgroundColor: APP_COLOR }}>
    <Body>
      <Text>Birth profile</Text>
    </Body>
    <Right>
      <Icon name="close" onPress={() => updateModalValue('showProfileModal', false)} />
    </Right>
  </Header>
);
