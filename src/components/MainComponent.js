import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './HomeComponent';
import Header from './HeaderComponent'
import About from './AboutComponent';
import Contact from './ContactComponent';


class Main extends Component {
  render() {
    
    const HomePage = () => {
      return (
        <Home />
      );
    }

    const AboutPage = () => {
      return (
        <About />
      );
    }

    const ContactPage = () => {
      return (
        <Contact />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route path='/aboutus' component={AboutPage} />
          <Route path='/contactus' component={ContactPage} />
          <Redirect to='/home' />
        </Switch>
      </div>
    );
  }
}

export default Main;