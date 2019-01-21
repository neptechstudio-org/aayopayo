import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container, Content, View, Text,
} from 'native-base';
import renderScreenHeader from '../../common/ScreenHeader';
import Form from '../../common/Form';
import sinInStructure from './signInStructure';
import * as actions from '../../actions';
import ShowInternetConnectionInfo from '../../common/ShowInternetConnectionInfo';

class Index extends Component {

  static navigationOptions = {
    header: null,
  }

  state={};

  render() {
    const { navigation } = this.props;
    // console.log(this.props.registerForm);
    return (
      <Container>
        {renderScreenHeader('Sign In', navigation)}
        <Content>
          <ShowInternetConnectionInfo {...this.props} />
          <View>
            <Form contents={sinInStructure()} {...this.props} />
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
              <Text style={{ color: 'blue' }} onPress={() => navigation.navigate('ForgotPassword')}>
                Forgot your password ?
              </Text>
              <Text style={{ marginTop: 20 }}>
                Do not have account?
                <Text style={{ color: 'blue', margin: 10 }} onPress={() => navigation.navigate('RegisterNewAccount')}>
                Sign Up
                </Text>
              </Text>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

Index.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired  //eslint-disable-line
};
const mapStateToProps = ({ registerForm }) => ({ registerForm });

export default connect(mapStateToProps, { ...actions })(Index);
