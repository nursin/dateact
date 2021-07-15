import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
import { generateName, generateAge, randomHoroscope, generateBIO, generateAdjectives } from '../shared/functions';


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
      }
    };
  }

  render() {
    console.log('Name:', generateName('unisex', this.state.maleNames, this.state.femaleNames, this.state.unisexNames, this.state.lastNames));
    console.log('Age:', generateAge(10-19));
    console.log('Horoscope:', randomHoroscope(this.state.horoscopes));
    console.log('Type: Not Famous');
    console.log('Bio:', generateBIO());
    console.log('Adjectives:', generateAdjectives(this.state.adjectives.positive, this.state.adjectives.negative));
    console.log('Quirky fact:');
    console.log('Profession:');

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
        <RenderChooseFeaturesForm data={this.state}/>
      );
    }
    
    const ProfileReadyComponentPage = () => {
      return (
        <Profile />
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