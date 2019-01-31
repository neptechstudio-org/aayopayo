import React, { Component } from 'react';
import Modal from 'react-native-modal';
import { View, Spinner } from 'native-base';
import ModalHeader from './Header';
import ModalContent from './Content';

class ContactUs extends Component {
  state = {};

  render() {
    const { modal } = this.props;
    // console.log('modal value in contact us page', modal);
    return (
      <Modal
        backdropColor="null"
        isVisible={modal.showMyBid}
        animationInTiming={500}
        animationOutTiming={500}
        style={{ flex: 1, backgroundColor: '#fff', margin: 0 }}
      >
        <ModalHeader {...this.props} />
        {modal.myBidContent !== null
          ? <ModalContent {...this.props} />
          : (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Spinner size="large" />
            </View>
          )
      }
      </Modal>
    );
  }
}

export default ContactUs;
