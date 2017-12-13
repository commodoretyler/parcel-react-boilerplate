import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this._clickHandler = this._clickHandler.bind(this);
  }

  _clickHandler() {
    console.log("Click!");
  }

  render() {
    const { buttonTitle } = this.props;

    return (
      <button className="button" type="button" onclick={() => _clickHandler() }>
        { buttonTitle }
      </button>
    );
  }
}
