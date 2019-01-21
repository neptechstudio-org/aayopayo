import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';
import renderScreenHeader from '../../common/ScreenHeader';
import Form from '../../common/Form';
import acountDetailStructure from './acountDetailStructure';
import * as actions from '../../actions';

class AcountDetails extends Component {

  static navigationOptions = {
    header: null,
  }

  state = {};

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        {renderScreenHeader('Enter your account details', navigation)}
        <Content>
          <Form contents={acountDetailStructure()} {...this.props} />
        </Content>
      </Container>
    );
  }
}

const MapStateToProps = ({ registerForm }) => ({ registerForm });

export default connect(MapStateToProps, { ...actions })(AcountDetails);
