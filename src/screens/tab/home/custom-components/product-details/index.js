import React, { Component } from 'react';
import Modal from 'react-native-modal';
import ModalHeader from './Header';
import Content from './Content';

class index extends Component {
  state = {};

  render() {
    const { main } = this.props;
    return (
      <Modal
        backdropColor="null"
        isVisible={main.showProductDetails !== null}
        style={{ flex: 1, backgroundColor: '#fff', margin: 0 }}
      >
        <ModalHeader {...this.props} />
        <Content {...this.props} />
      </Modal>
    );
  }
}

export default index;
