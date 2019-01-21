import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import renderScreenHeader from '../../common/ScreenHeader';
import Form from '../../common/Form';
import personalStructure from './personalDetailStructure';
import * as actions from '../../actions';

class PersonalDetails extends Component {

  static navigationOptions = {
    header: null,
  }

  state={};

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        {renderScreenHeader('Enter your personal details', navigation)}
        <Content>
          <Form contents={personalStructure()} {...this.props} />
        </Content>
      </Container>
    );
  }
}

PersonalDetails.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = ({ registerForm }) => ({ registerForm });

export default connect(mapStateToProps, { ...actions })(PersonalDetails);
