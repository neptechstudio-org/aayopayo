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
import ProfileSetting from '../../model/profile-setting';
import FeaturedProduct from './featured-product';
import ImageSlider from './image-slider';

class index extends Component {
  state = {};

  render() {
    // console.log('featured product details', this.props.main.imageSlider);
    return (
      <Container>
        <Header {...this.props} />
        <FeaturedProduct {...this.props} />
        <ImageSlider {...this.props} />
        <ContactUs {...this.props} />
        <NotificationModal {...this.props} />
        <AddCoin {...this.props} />
        <ProductDetails {...this.props} />
        <ProfileSetting {...this.props} />
      </Container>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { ...actions })(index);
