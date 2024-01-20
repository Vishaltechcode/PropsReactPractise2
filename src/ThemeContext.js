import React, { Component } from 'react'

const ThemeContext = React.createContext();

class ThemeContext extends Component {
  state = {
    color:"blue"
  }
  
  
  render() {
 
    const {children} = this.props;
    const {color} = this.state;
    return (
      <ThemeContext.Provider
        value={{
          color
        }}
      >
{children}

      </ThemeContext.Provider>
    )
  }
}

export default ThemeContext;

export {ThemeContextProvider};

