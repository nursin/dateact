import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './HomeComponent';



class Main extends Component {
  render() {

    const HomePage = () => {
      return (
        <Home />
      );
    }
    return (
      <div>
        <Switch>
          <Route path='/home' component={HomePage} />
          <Redirect to='/home' />
        </Switch>
      </div>
    );
  }
}

export default Main;