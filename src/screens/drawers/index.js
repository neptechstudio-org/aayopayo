import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';
import Primary from './Primary';
import nativeBaseHandler from '../../common/nativeBaseHander';
import * as actions from '../../actions';

class index extends Component {
  state={ renderMenu: true };

  async componentWillMount() {
    await nativeBaseHandler();
    this.setState({ renderMenu: false });
  }

  render() {
    const { renderMenu } = this.state;
    if (renderMenu) {
      return <AppLoading />;
    }
    return (
      <Primary {...this.props} />
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { ...actions })(index);
