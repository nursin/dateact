import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import RenderChooseFeaturesForm from './ChooseFeaturesFormComponent'
import Header from './HeaderComponent'
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';


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

    const RenderChooseFeaturesFormPage = () => {
      return (
        <RenderChooseFeaturesForm />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route path='/aboutus' component={AboutPage} />
          <Route path='/contactus' component={ContactPage} />
          <Route path='/choosefeaturesform' component={RenderChooseFeaturesFormPage} />


          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;