import React, { Component } from 'react';
import {
  Container,
} from 'native-base';
import { connect } from 'react-redux';
import Header from './custom-components/Header';
import NotificationModal from '../../model/notification';
import AddCoin from '../../model/add-coin';
import * as actions from '../../../actions';
import ProductDetails from './custom-components/product-details';
import ContactUs from '../../model/contact-us';

class index extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Header {...this.props} />
        <ContactUs {...this.props} />
        <NotificationModal {...this.props} />
        <AddCoin {...this.props} />
        <ProductDetails {...this.props} />
      </Container>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { ...actions })(index);
