import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Video } from 'expo';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../config';

const VideoPlayer = ({
  videoURI, shouldPlay, onPlaybackStatusUpdate, onLoadVideo, onReadyForDisplay,
}) => {
  return (
    <Video
      style={styles.videoStyle}
      source={{ uri: 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4' }}
      shouldPlay={shouldPlay}
      resizeMode="contain"
      onPlaybackStatusUpdate={onPlaybackStatusUpdate}
      onLoad={onLoadVideo}
      onReadyForDisplay={onReadyForDisplay}
    />
  );
};

VideoPlayer.propTypes = {
  videoURI: PropTypes.string.isRequired,
  shouldPlay: PropTypes.bool.isRequired,
  onPlaybackStatusUpdate: PropTypes.func.isRequired,
  onLoadVideo: PropTypes.func.isRequired,
  onReadyForDisplay: PropTypes.func.isRequired,
};

export default VideoPlayer;

const styles = StyleSheet.create({
  videoStyle: {
    height: SCREEN_HEIGHT * 0.5,
    width: SCREEN_WIDTH * 0.9,
    position: 'relative',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
