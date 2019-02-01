import React, { Component } from 'react';
import {
  Container, View, Fab, Icon, Button,
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
import ViewMore from './view-more';
import PlayNow from '../../model/play-now';
import MyBid from '../../model/my-bid';

class index extends Component {
  state = { active: false };

  render() {
    console.log('featured product details', this.props.main.myBidAmount);
    return (
      <Container style={{ backgroundColor: '#f5f5f5' }}>
        <Header {...this.props} />
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{ flexWrap: 'wrap' }}
          style={{ backgroundColor: 'red', zIndex: 20 }}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}>
          <Icon name={this.state.active ? 'close' : 'settings' } />
          <Button style={{ backgroundColor: '#34A34F' }}>
            <Icon name="logo-whatsapp" />
          </Button>
          <Button style={{ backgroundColor: '#3B5998' }}>
            <Icon name="logo-facebook" />
          </Button>
          <Button disabled style={{ backgroundColor: '#DD5144' }}>
            <Icon name="mail" />
          </Button>
        </Fab>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <ImageSlider {...this.props} />
          <FeaturedProduct {...this.props} />
          <LiveProduct {...this.props} />
          <View style={{ height: 5 }} />
          <BumperProduct {...this.props} />
          <View style={{ height: 5 }} />
          <UpcomingProduct {...this.props} />
          <View style={{ height: 5 }} />
          <ClosedProduct {...this.props} />
          <ContactUs {...this.props} />
          <NotificationModal {...this.props} />
          <AddCoin {...this.props} />
          <ProductDetails {...this.props} />
          <ProfileSetting {...this.props} />
          <ViewMore {...this.props} />
          <PlayNow {...this.props} />
          <MyBid {...this.props} />
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { ...actions })(index);
