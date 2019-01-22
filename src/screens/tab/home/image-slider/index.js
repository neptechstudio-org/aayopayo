import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import { Button, Thumbnail } from 'native-base';
import Swiper from 'react-native-swiper';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../config';

const renderSlider = (details, idx) => {
  return (
    <View style={{flex: 1}} key={idx}>
      <Image source={{uri: details.image}} style={{ height: '100%', width: '100%' }} />
    </View>
  );
};

class ImageSlider extends Component {
  state = {};

  render() {
    const { main } = this.props;
    return (
      <View style={{height: SCREEN_HEIGHT * 0.3, backgroundColor: '#000' }}>
        <Swiper
          showsButtons
          autoplay
          autoplayTimeout={2.5}
          autoplayDirection
        >
          {main.imageSlider.map((details, idx) => renderSlider(details, idx))}
        </Swiper>
      </View>
    );
  }
}

export default ImageSlider;
