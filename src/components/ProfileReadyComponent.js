import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { generateName, generateAge, randomHoroscope, generateBIO, generateAdjectives, generateQuirkyFact, generateProfession } from '../shared/functions';

class Profile extends Component {
  constructor(props) {
    super(props);
    // sets change/page to false so charform will load after instructions page
    this.props.data.changePage = false
  }
  render() {
    return (
      <div className="container">
        <div className="row row-content">
          <div className="col-12">
            <div className="card custom-card">
              <div className="card-header bg-gradient"><h2 className="text-white text-center" id="profileHeader">Character profile ready</h2></div>
              <div className="card-body col">
                <div id="name" className="col-12 text-left"><strong>Name: </strong>{generateName(this.props.data.formValues.charGender, this.props.data.maleNames, this.props.data.femaleNames, this.props.data.unisexNames, this.props.data.lastNames)}</div>
                <div id="age" className="col-12 mt-1 text-left"><strong>Age: </strong>{generateAge(this.props.data.formValues.charAge)}</div>
                <div id="horoscope" className="col-12 mt-1 text-left"><strong>Horoscope: </strong>{randomHoroscope(this.props.data.horoscopes)}</div>
                <div id="type" className="col-12 mt-1 text-left"><strong>Type: </strong>Not Famous</div>
                <div id="bio" className="col-lg-9 mt-1 text-left"><strong>Horoscope: </strong>{generateBIO()}</div>
                <div id="adjectives" className="col-12 mt-1 text-left"><strong>Adjectives: </strong>{generateAdjectives(this.props.data.adjectives.positive, this.props.data.adjectives.negative)}</div>
                <div id="quirky-fact" className="col-lg-9 mt-1 text-left"><strong>Quirky fact: </strong>{generateQuirkyFact(this.props.data.quirkyFacts)}</div>
                <div id="profession" className="col-12 mt-1 text-left"><strong>Profession: </strong>{generateProfession(this.props.data.professions)}</div>
                <div className="btn-group mt-4 ml-2">
                  <Link className="btn btn-secondary btn-lg" to="/restart">Restart</Link>
                  {/* <!-- <button id="saveProfileBtn" class="btn btn text-white bg-blue button-hover-bg-gradient">Save</button> --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//restart
export default Profile;