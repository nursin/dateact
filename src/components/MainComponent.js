import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './HeaderComponent'
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import RenderChooseFeaturesForm from './ChooseFeaturesFormComponent';
import CreateChar from './CreateCharFormComponent';
import Profile from './ProfileReadyComponent';
// import CreateChar from './CreateCharFormComponent';
import { NAMES_MALE, UNISEX_NAMES, NAMES_FEMALE, LAST_NAMES } from '../shared/names';
import { HOROSCOPE } from '../shared/horoscopes';
import { POSITIVE_ADJECTIVE_LIST, NEGATIVE_ADJECTIVE_LIST} from '../shared/adjectives';
import { QUIRKY_FACT } from '../shared/quirky-fact';
import { PROFESSION } from '../shared/profession';
import { FAMOUS_FEMALES, FAMOUS_MALES, FAMOUS_UNISEX } from '../shared/famous';


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
      famousMales: FAMOUS_MALES,
      famousFemales: FAMOUS_FEMALES,
      famousUnisex: FAMOUS_UNISEX,
      formValues: {
        charGender: '',
        charAge: '',
        charType: ''
      },
      profile: {
        name: 'Bobby',
        age: '34',
        horoscope: 'Pisces',
        type:'Not Famous',
        bio: 'grew up in a small town',
        adjectives: 'Intelligent/Bad Listener',
        quirkyFact: 'Spend alot of time programming',
        profession: 'Nurse/Programmer/Entreprenuer/Engineer'
      }
    };
        
    this.setChanged = this.setChanged.bind(this)

  }

  setChanged(values) {
    this.setState({
      formValues: {
        charGender: values.charGender,
        charAge: values.charAge,
        charType: values.charType
      },
      profile: {
        name: values.createName,
        age: values.createAge,
        horoscope: values.createHoroscope,
        type: values.charType,
        bio: values.createBio,
        adjectives: values.createAdjectives,
        quirkyFact: values.createQuirkyFact,
        profession: values.createProfession
      }
     });
  }

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

    const ChooseFeaturesFormPage = () => {
      return (
        <RenderChooseFeaturesForm data={this.state} setChanged={this.setChanged}/>
      );
    }

    const CreateCharFormPage = () => {
      return (
        <CreateChar data={this.state} setChanged={this.setChanged}/>
      );
    }
    
    const ProfileReadyComponentPage = () => {
      return (
        <Profile data={this.state} setChanged={this.setChanged} />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route path='/aboutus' component={AboutPage} />
          <Route path='/contactus' component={ContactPage} />
          <Route path='/choosefeaturesform' component={ChooseFeaturesFormPage} />
          <Route path='/createchar' component={CreateCharFormPage} />
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