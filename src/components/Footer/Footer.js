import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component styles
import styles from './styles.js';

export default class Footer extends Component {
  render() {
    return (
      <div className={ `${ styles }`} >
        <a href="https://github.com/anorudes/redux-easy-boilerplate">GitHub</a>
      </div>
    );
  }
}
