// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

// Assets
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {
    const { title, items } = this.props;

    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">

            <span className="mdl-layout-title">{title}</span>

            <div className="mdl-layout-spacer"></div>

            <nav className="mdl-navigation mdl-layout--large-screen-only">
              {
                items && items.map(
                  (item, key) =><div key={key}><Link to={item.url} key={key} className="mdl-navigation__link">{item.title}</Link></div> 
                )
              }
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">{title}</span>
          <nav className="mdl-navigation">
            {
              items && items.map(
                (item, key) =><div key={key}><Link to={item.url} key={key} className="mdl-navigation__link">{item.title}</Link></div>               )
            }
          </nav>
        </div>
        <main className="mdl-layout__content">
          <div className="page-content"></div>
        </main>
      </div>
    );
  }
}

export default Header;
