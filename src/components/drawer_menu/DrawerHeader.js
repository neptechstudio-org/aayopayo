import React, { Component } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import {
  Header, Left, Icon, Body, Title, Text, View,
} from 'native-base';
import {
  APP_COLOR, APP_TITLE_TEXT_COLOR, SCREEN_HEIGHT, SCREEN_WIDTH,
} from '../../config';
// import * as actions from '../../actions';

class DrawerHeader extends Component {
  state = {};

  renderBackGroundImage = (main) => {
    const { header, contentMessage } = this.props;
    if (header.title === 'Menu') {
      return (
        <View style={{
          width: SCREEN_WIDTH * 0.9,
          height: SCREEN_HEIGHT * 0.25,
          backgroundColor: APP_COLOR,
          justifyContent: 'space-around',
        }}
        >
          <Image
            source={header.logo}
            resizeMode="stretch"
            style={{
              width: SCREEN_WIDTH * 0.9,
              height: SCREEN_HEIGHT * 0.15,
            }}
          />
          {main.userId && (
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 12 }}>
              Name :
                <Text style={{ color: '#FFF', fontStyle: 'italic', fontSize: 12 }}>{` ${main.userId.name}`}</Text>
              </Text>
              <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 12 }}>
              Email :
                <Text style={{ color: '#FFF', fontStyle: 'italic', fontSize: 12 }}>{` ${main.userId.email}`}</Text>
              </Text>
            </View>
          )}
        </View>
      );
    }
    return (
      <View style={{
        width: SCREEN_WIDTH * 0.9,
        height: SCREEN_HEIGHT * 0.2,
      }}
      >
        <Text
          style={{
            padding: 10,
            color: '#757575',
            borderBottomWidth: 0.5,
            borderBottomColor: '#757575',
          }}
        >
          {header.contentMessage}
        </Text>
      </View>
    );
  }

  render() {
    const { header, navigation, main } = this.props;
    // console.log('prosps in drawer header', this.props.main.userId)
    return (
      <View>
        <Header style={{ backgroundColor: APP_COLOR, elevation: 2 }}>
          <Left>
            <Icon
              style={{ color: APP_TITLE_TEXT_COLOR }}
              name={header.title === 'Menu' ? 'close' : 'arrow-back'}
              onPress={() => {
                navigation.closeDrawer();
                // toggleMenu('Menu');
              }
              }
            />
          </Left>
          <Body>
            <Title>
              <Text
                style={{
                  color: APP_TITLE_TEXT_COLOR,
                  fontSize: 20,
                }}
              >
                {header.title}
              </Text>
            </Title>
          </Body>
        </Header>
        {this.renderBackGroundImage(main)}
      </View>
    );
  }
}

DrawerHeader.defaultProps = {
  header: {},
  navigation: {},
};

DrawerHeader.propTypes = {
  header: PropTypes.objectOf(PropTypes.any),
  navigation: PropTypes.objectOf(PropTypes.any),
  main: PropTypes.objectOf(PropTypes.any).isRequired,

};

// const mapStateToProps = ({ drawer }) => {
//   return drawer;
// };

export default DrawerHeader;
