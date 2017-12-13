import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { toggleButtonTitle } from '../actions/main';

const mapStateToProps = state => {
  return {
    buttonTitle: state.main.buttonTitle
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onButtonClick: (title) => {
      dispatch(toggleButtonTitle(title));
    }
  };
}

class App extends PureComponent {
  constructor(props) {
    super(props);
    this._clickHandler = this._clickHandler.bind(this);
  }

  _clickHandler(buttonTitle) {
    return this.props.onButtonClick(buttonTitle);
  }

  render() {
    const { buttonTitle } = this.props;

    return (
      <button className="button" type="button" onClick={() => this._clickHandler(buttonTitle) }>
        { buttonTitle }
      </button>
    );
  }
}

App.propTypes = {
  buttonTitle: PropTypes.string.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
