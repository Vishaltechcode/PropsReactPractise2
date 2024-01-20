import React, { Component } from 'react'

import ThemeContext from './ThemeContext';

export default class Page extends Component {

    // static contexttype = ThemeContext;
  render() {
    let contexttype = ThemeContext.Provider;
    console.log(contexttype);
    const {color}= contexttype._currentValue;
    return (
      <div>
        
        <p> user selected color: {color}</p>
      </div>
    )
  }
}
