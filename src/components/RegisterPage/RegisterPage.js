

import React, { Component, PropTypes } from 'react';
import s from './RegisterPage.scss';
import withStyles from '../../decorators/withStyles';

const title = 'New User Registration';

@withStyles(s)
class RegisterPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
          <p>...</p>
        </div>
      </div>
    );
  }

}

export default RegisterPage;
