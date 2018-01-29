// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

// Assets
import './Global/css/App.css';

// Data
import items from '../data/menu';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <div className="App">
        <Header
          title="Inventario-App"
          items={items}
        />
        <Content body={children} />
        <Footer />
      </div>
    );
  }
}

export default App;
