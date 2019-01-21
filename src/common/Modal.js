import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import {
  View, Header, Body, Right, Title, Text, Icon, Spinner,
} from 'native-base';
import Modal from 'react-native-modal';
import { SCREEN_WIDTH, APP_COLOR, SCREEN_HEIGHT } from '../config';

const renderModalContent = (children, modal) => {
  if (modal.loading) {
    return <Spinner size="large" />;
  } if (modal.error !== '') {
    return <Text style={{ fontSize: 20, color: 'red' }}>{modal.content}</Text>;
  }
  return children;
};

const CustomModal = ({
  modal, updateModalValue, children, title, modalShow,
}) => (
  <Modal
    isVisible={modal[modalShow]}
    animationIn="slideInUp"
    animationOut="slideOutDown"
    onSwipe={() => updateModalValue(modalShow, false)}
    swipeDirection="down"
    style={styles.centerModal} //eslint-disable-line
  >
    <View
      style={styles.contentStyle} // eslint-disable-line
    >
      <Header style={{ backgroundColor: APP_COLOR }}>
        <Body>
          <Title><Text style={{ color: '#fff', fontSize: 20 }}>{title}</Text></Title>
        </Body>
        <Right>
          <Icon
            onPress={() => updateModalValue(modalShow, false)}
            name="close"
            style={{ color: '#fff' }}
          />
        </Right>
      </Header>
      {renderModalContent(children, modal)}
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  centerModal: {
    // justifyContent: 'center',
    // margin: 0,
    // alignItems: 'center',
  },
  contentStyle: {
    maxHeight: SCREEN_HEIGHT * 0.5,
    minHeight: 100,
    margin: 0,
    width: SCREEN_WIDTH * 0.9,
    backgroundColor: '#fff',
  },
});

CustomModal.propTypes = {
  modal: PropTypes.objectOf(PropTypes.any).isRequired,
  updateModalValue: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  modalShow: PropTypes.string.isRequired,
};
export default CustomModal;
