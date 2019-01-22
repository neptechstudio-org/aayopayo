import React, { Component } from 'react';
import {
  Container,
} from 'native-base';
import { ScrollView } from 'react-native';
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
import LiveProduct from './live';
import BumperProduct from './bumper-product';
import UpcomingProduct from './upcoming';
import ClosedProduct from './closed-product';

class index extends Component {
  state = {};

  render() {
    // console.log('featured product details', this.props.main.imageSlider);
    return (
      <Container>
        <Header {...this.props} />
        <ScrollView showsHorizontalScrollIndicator={false}>
          <FeaturedProduct {...this.props} />
          <ImageSlider {...this.props} />
          <LiveProduct {...this.props} />
          <BumperProduct {...this.props} />
          <UpcomingProduct {...this.props} />
          <ClosedProduct {...this.props} />
          <ContactUs {...this.props} />
          <NotificationModal {...this.props} />
          <AddCoin {...this.props} />
          <ProductDetails {...this.props} />
          <ProfileSetting {...this.props} />
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { ...actions })(index);
