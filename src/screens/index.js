import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';
import nativeBaseHandler from '../common/nativeBaseHander';
import TabScreen from './tab/home';
import * as actions from '../actions';
import { getAsyncData } from '../common/AsycstrorageAaayopayo';

class index extends Component {
  static navigationOptions = {
    header: null,
  }

  state={ renderMain: true };

  async componentWillMount() {
    const { updateFormValue, fetchProduct, updateMainValue } = this.props;
    await nativeBaseHandler();
    await fetchProduct();
    const loginStatus = await getAsyncData('LOGIN_STATUS');
    const loginId = await getAsyncData('USER_ID');
    const userName = await getAsyncData('USER_NAME');
    const userEmail = await getAsyncData('USER_EMAIL');
    const userPhone = await getAsyncData('USER_PHONE');
    if (loginStatus === 'true' && loginId) {
      updateFormValue('loginStatus', true);
      updateMainValue('userId', { name: userName, email: userEmail, id: loginId, phoneNo: userPhone });
      updateFormValue('full_name', userName);
      updateFormValue('email', userEmail);
    } else {
      updateFormValue('loginStatus', false);
    }
    this.setState({ renderMain: false });
  }

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
