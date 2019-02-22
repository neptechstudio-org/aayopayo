import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';
import nativeBaseHandler from '../common/nativeBaseHander';
import TabScreen from './tab/home';
import * as actions from '../actions';
import { getAsyncData, multiGetAsync } from '../common/AsycstrorageAaayopayo';

class index extends Component {
  static navigationOptions = {
    header: null,
  }

  state={ renderMain: true };

  async componentWillMount() {
    const { updateFormValue, fetchProduct, updateMainValue, updateModalValue} = this.props;
    await nativeBaseHandler();
    const localStorage = await getAsyncData('LIVE_PRODUCTS'); // 'CLOSED_PRODUCTS', 'FEATURED_PRODUCTS', 'UPCOMING_PRODUCTS', 'IMGAE_SLIDER']);
    console.log('local storage products', JSON.parse(localStorage));
    await fetchProduct();
    const loginStatus = await getAsyncData('LOGIN_STATUS');
    const loginId = await getAsyncData('USER_ID');
    const userName = await getAsyncData('USER_NAME');
    const userEmail = await getAsyncData('USER_EMAIL');
    const userPhone = await getAsyncData('USER_PHONE');
    const userCoins = await getAsyncData('USER_COINS');
    const cvid = await getAsyncData('NEXT_ADD_VIDEO');
    if (loginStatus === 'true' && loginId) {
      updateMainValue('userCoins', userCoins);
      updateFormValue('loginStatus', true);
      updateMainValue('userId', { name: userName, email: userEmail, id: loginId, phoneNo: userPhone });
      updateFormValue('full_name', userName);
      updateFormValue('email', userEmail);
      updateModalValue('videoContent', { cvid });
    } else {
      updateFormValue('loginStatus', false);
    }
    this.setState({ renderMain: false });
  }

  objectParseHelper = arr => JSON.parse(arr).map(obj => JSON.parse(obj));

  render() {
    const { renderMain } = this.state;
    if (renderMain) {
      return <AppLoading />;
    }
    return (
      <TabScreen {...this.props} />
    );
  }
}

const mapStateToProps = ({ registerForm }) => registerForm;

export default connect(mapStateToProps, { ...actions })(index);
