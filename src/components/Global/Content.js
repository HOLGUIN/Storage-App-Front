// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets
import './css/Content.css';

class Content extends Component {
  static propTypes = {
    body: PropTypes.object.isRequired
  };

  render() {
    const { body } = this.props;

    return (
      <div className="Content mdl-layout__content">
        <div className="Cbody">
          {body}
        </div>
      </div>
    );
  }
}

export default Content;
