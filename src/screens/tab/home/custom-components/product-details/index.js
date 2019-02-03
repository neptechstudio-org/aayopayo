import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BackHandler } from 'react-native';
import Modal from 'react-native-modal';
import ModalHeader from './Header';
import Content from './Content';

class index extends Component {
  state = {};

  render() {
    const { main, updateMainValue } = this.props;
    return (
      <Modal
        backdropColor="null"
        animationOut="slideOutLeft"
        animationIn="slideInRight"
        animationInTiming={500}
        animationOutTiming={500}
        onBackButtonPress={() => updateMainValue('showProductDetails', null)}
        isVisible={main.showProductDetails !== null}
        style={{ flex: 1, backgroundColor: '#fff', margin: 0 }}
      >
        <ModalHeader {...this.props} />
        <Content {...this.props} />
      </Modal>
    );
  }
}
index.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  updateMainValue: PropTypes.func.isRequired,
}

export default index;
