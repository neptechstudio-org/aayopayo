import React from 'react';
import PropTypes from 'prop-types';
import { Font } from 'expo';
import {
  Header, Left, Button, Icon, Body, Title, Right, Text, Thumbnail
} from 'native-base';
import { APP_COLOR, APP_TITLE_TEXT_COLOR } from '../../../../config';

class CustomHeader extends React.Component {
 state ={ fontLaod: false }
  async componentWillMount() {
    await Font.loadAsync({ sansSarif: require('../../../../../assets/fonts/Aaargh.ttf') });
    this.setState({ fontLaod: true })
  }

  render() {
    const { navigation, addCoinHandler, registerForm, main } = this.props;
    return (
      <Header style={{ backgroundColor: APP_COLOR }}>
      <Left>
        <Button transparent onPress={() => navigation.openDrawer()}>
          <Icon style={{ color: APP_TITLE_TEXT_COLOR }} name="menu" />
        </Button>
      </Left>
      <Body>
        <Title style={{ color: APP_TITLE_TEXT_COLOR, marginLeft: -20  }}>
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
            <Thumbnail style={{ height: 40, width: 40, marginRight: -20 }} source={require('../../../../../assets/videoCoind.png')} />
            <Text style={{ color: '#FFD700', maxWidth: 150 }}>{main.userCoins}</Text>
            <Icon name="add" style={{ color: '#FFD700', height: 20, width: 20 }} />
          </Button>
        </Right>
        )}
      </Header>
    );
  }
}
CustomHeader.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  updateModalValue: PropTypes.func.isRequired,
};
export default CustomHeader;
