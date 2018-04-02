import React from 'react';
import logo from './react.svg';
import './Browse.css';

class Browse extends React.Component {
  render() {
    return (
      <div className="Browse">
        <div className="Browse-header">
          <img src={logo} className="Browse-logo" alt="logo" />
          <h2>Welcome to Razzle</h2>
        </div>
        <p className="Browse-intro">
          To get started, edit <code>src/App.js</code> or{' '}
          <code>src/Browse.js</code> and save to reload.
        </p>
        <p className="Browse-intro">
          To get started, edit <code>src/App.js</code> or{' '}
          <code>src/Browse.js</code> and save to reload.
        </p>
        <ul className="Browse-resources">
          <li>
            <a href="https://github.com/jaredpalmer/razzle">Docs</a>
          </li>
          <li>
            <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
          </li>
          <li>
            <a href="https://palmer.chat">Community Slack</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Browse;
