import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Fade } from 'react-animation-components';

import Header from './HeaderComponent'
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import RenderChooseFeaturesForm from './ChooseFeaturesFormComponent'
import Profile from './ProfileReadyComponent';
// import CreateChar from './CreateCharFormComponent';
import { NAMES_MALE, UNISEX_NAMES, NAMES_FEMALE, LAST_NAMES } from '../shared/names';
import { HOROSCOPE } from '../shared/horoscopes';
import { POSITIVE_ADJECTIVE_LIST, NEGATIVE_ADJECTIVE_LIST} from '../shared/adjectives';
import { QUIRKY_FACT } from '../shared/quirky-fact';
import { PROFESSION } from '../shared/profession';


class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      maleNames: NAMES_MALE,
      femaleNames: NAMES_FEMALE,
      unisexNames: UNISEX_NAMES,
      lastNames: LAST_NAMES,
      horoscopes: HOROSCOPE,
      adjectives: {
        positive: POSITIVE_ADJECTIVE_LIST,
        negative: NEGATIVE_ADJECTIVE_LIST
      },
      quirkyFacts: QUIRKY_FACT,
      professions: PROFESSION,
      formValues: {
        charGender: '',
        charAge: '',
        charType: ''
      },
      changePage: false
    };
        
    this.setChanged = this.setChanged.bind(this)

  }

  setChanged(values) {
    this.setState({
      formValues: {
        charGender: values.charGender,
        charAge: values.charAge,
        charType: values.charType
      }
     });
  }

  render() {

    const HomePage = () => {
      return (
        <Fade in>
        <Home />
        </Fade>
      );
    }

    const AboutPage = () => {
      return (
        <Fade in>
        <About />
        </Fade>
      );
    }

    const ContactPage = () => {
      return (
        <Fade in>
        <Contact />
        </Fade>
      );
    }

    const RenderChooseFeaturesFormPage = () => {
      return (
        <Fade in>
        <RenderChooseFeaturesForm data={this.state} setChanged={this.setChanged}/>
        </Fade>
      );
    }
    
    const ProfileReadyComponentPage = () => {
      return (
        <Fade in>
        <Profile data={this.state} setChanged={this.setChanged} />
        </Fade>
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
          <Route path='/profileready' component={ProfileReadyComponentPage} />
          <Route path='/restart' component={HomePage} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;