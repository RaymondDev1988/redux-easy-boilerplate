import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component styles
import 'style!./styles/Items.scss';
let styles = require('./styles/Items.scss').locals.styles;

import { add, del } from '../actions';

class Items extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    React.findDOMNode(this.refs.text).value = "test";
  }
  render() {
    const { dispatch, items } = this.props;
    let _addClick = () => {
      this.props.dispatch(add(React.findDOMNode(this.refs.text).value));
    }
    return (
      <div className={ `${ styles }`} >
        <For each="item" of={ items }>
          <div key={ item }>{ item }</div>
        </For>
        <hr />
        <div className="form-group">
          <input type="text" className="form-control" ref="text" />
        </div>
        <div className="form-group">
          <button className="btn btn-default" onClick={ () => _addClick() }>add</button>
          {' '}
          <button className="btn btn-default" onClick={ () => dispatch(del()) }>delete</button>
        </div>
      </div>
    );
  }
}

let select = (state) => {
  return {
    items: state.items
  };
}

export default connect(select)(Items);