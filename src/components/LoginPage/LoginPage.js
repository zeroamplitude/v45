/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import s from './LoginPage.scss';
import withStyles from '../../decorators/withStyles';

import { connect } from 'react-redux';
import { loginUser } from '../../actions/AuthActions';

const title = 'Log In';

@withStyles(s)
class LoginPage extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  _handleLogin = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(loginUser())
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <button onClick={this._handleLogin}>Login</button>
        </div>
      </div>
    );
  }

}

export default connect(state => state)(LoginPage);
