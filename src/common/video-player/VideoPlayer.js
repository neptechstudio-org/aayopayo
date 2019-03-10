import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Video } from 'expo';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../config';

const VideoPlayer = ({
  videoContent, shouldPlay, onPlaybackStatusUpdate, onLoadVideo, onReadyForDisplay,
}) => {
  return (
    <Video
      style={styles.videoStyle}
      source={{ uri: videoContent.video }}
      shouldPlay={shouldPlay}
      resizeMode="contain"
      onPlaybackStatusUpdate={onPlaybackStatusUpdate}
      onLoad={onLoadVideo}
      // usePoster
      onReadyForDisplay={onReadyForDisplay}
      // posterSource={{ uri: videoContent.cover }}
    />
  );
};

VideoPlayer.propTypes = {
  videoContent: PropTypes.objectOf(PropTypes.any).isRequired,
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
  },
});
