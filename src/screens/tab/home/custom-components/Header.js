import React from 'react';
import PropTypes from 'prop-types';
import {
  Header, Left, Button, Icon, Body, Title, Right, Text,
} from 'native-base';
import { APP_COLOR, APP_TITLE_TEXT_COLOR } from '../../../../config';

const CustomHeader = ({ navigation, addCoinHandler, registerForm, main }) => (
  <Header style={{ backgroundColor: APP_COLOR }}>
    <Left>
      <Button transparent onPress={() => navigation.openDrawer()}>
        <Icon style={{ color: APP_TITLE_TEXT_COLOR }} name="menu" />
      </Button>
    </Left>
    <Body>
      <Title style={{ color: APP_TITLE_TEXT_COLOR, marginLeft: -20 }}>
        AayoPaayo
      </Title>
    </Body>
    {registerForm.loginStatus && (
    <Right>
      <Button
        style={{ backgroundColor: APP_COLOR, marginRight: -15 }}
        transparent
        onPress={() => addCoinHandler()}
      >
        <Icon name="logo-usd" style={{ color: 'yellow' }} />
        <Text style={{ color: 'yellow', maxWidth: 150 }}>{` Coins: ${main.userCoins}`}</Text>
        <Icon name="add" style={{ color: 'yellow', height: 20, width: 20 }} />
      </Button>
    </Right>
    )}
  </Header>
);

CustomHeader.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  updateModalValue: PropTypes.func.isRequired,
};

export default CustomHeader;
