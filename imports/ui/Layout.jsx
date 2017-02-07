import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';

import Header from './header/Header.jsx'

injectTapEventPlugin();

export default class AuthLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle (){
    this.setState({open: !this.state.open});
  }

  render () {
    return (
        <MuiThemeProvider>
          <Header/>
        </MuiThemeProvider>
    );
  }
}