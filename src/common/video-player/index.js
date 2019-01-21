import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Icon, Button, Text, Spinner } from 'native-base';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../config';
import Video from './VideoPlayer';
import Controller from './Controller';

class VideoPlayer extends Component {
  state = {
    // isBuffering: false,
    // isPlaying: false,
    // isLoading: false,
    // isLoaded: false,
    didJustFinish: false,
    shouldPlay: false,
    addFinish: false,
    sliderValue: 0.8,
    minimumSlderValue: 0,
    maximumSliderValue: 100,
    showController: false,
    addCoinProgressBar: false,
    // videoHeight: 0,
    // videoWidth: 0,
  };

  onPlaybackStatusUpdate = (status) => {
    if (status.didJustFinish) {
      this.setState({
        didJustFinish: true,
      });
    }
  }

  onLoadVideo = (response) => {
    // console.log('vedio load response', response);
  }

  onReadyForDisplay = (response) => {
    // console.log('ready to display', response);
  }

  getCoinHelper = () => {
    const { addCoinSuccess } = this.props;
    this.setState({ addCoinProgressBar: true });
    addCoinSuccess();
  }

  render() {
    const { shouldPlay, sliderValue, didJustFinish, addCoinProgressBar } = this.state;
    const { modal } = this.props;
    return (
      <View style={styles.videoContainerSyle}>
        <Video
          videoURI={modal.addCoinVideoUrl}
          onPlaybackStatusUpdate={this.onPlaybackStatusUpdate}
          shouldPlay={shouldPlay}
          onLoadVideo={this.onLoadVideo}
          onReadyForDisplay={this.onReadyForDisplay}
        />
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        >
          {!shouldPlay
            ? (
              <Icon
                name="arrow-dropright-circle"
                style={styles.iconStyle}
                onPress={() => this.setState({ shouldPlay: true })}
              />)
            : (
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  // backgroundColor: 'red',
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  padding: 10,
                }}
                onPressIn={() => this.setState({ showController: true })}
                onPressOut={() => this.setState({ showController: false })}
              >
                {this.state.showController ? <Controller sliderValue={sliderValue} /> : null }
              </TouchableOpacity>)}
          {didJustFinish ? (
            <View style={styles.iconStyle}>
              <Button style={{ backgroundColor: 'orange' }} onPress={this.getCoinHelper}>
                <Text> Get Coin</Text>
              </Button>
            </View>
          )
            : null
          }
          {
            addCoinProgressBar ? <Spinner size="large" color="green" /> : null
          }
        </View>
      </View>);
  }
}
export default VideoPlayer;

const styles = StyleSheet.create({
  videoContainerSyle: {
    backgroundColor: '#000',
  },
  iconStyle: {
    color: 'orange',
    fontSize: 60,
  },
});
