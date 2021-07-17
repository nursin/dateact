import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { generateProfile } from '../shared/functions';

class Profile extends Component {
  constructor(props) {
    super(props);
    // sets change/page to false so charform will load after instructions page
  }

  render() {
    console.log(this.props.data)
    return (
      <div className="container">
        <div className="row row-content">
          <div className="col-12">
            <div className="card custom-card">
              <div className="card-header bg-gradient"><h2 className="text-white text-center" id="profileHeader">Character profile ready</h2></div>
              <div className="card-body col">
                <div id="name" className="col-12 text-left"><strong>Name: </strong>{generateProfile(this.props.data.formValues.charType, this.props.data, 'name')}</div>
                <div id="age" className="col-12 mt-1 text-left"><strong>Age: </strong>{generateProfile(this.props.data.formValues.charType, this.props.data, 'age')}</div>
                <div id="horoscope" className="col-12 mt-1 text-left"><strong>Horoscope: </strong>{generateProfile(this.props.data.formValues.charType, this.props.data, 'horoscope')}</div>
                <div id="type" className="col-12 mt-1 text-left"><strong>Type: </strong>{generateProfile(this.props.data.formValues.charType, this.props.data, 'type')}</div>
                <div id="bio" className="col-lg-8 mt-1 text-left"><strong>Bio: </strong>{generateProfile(this.props.data.formValues.charType, this.props.data, 'bio')}</div>
                <div id="adjectives" className="col-12 mt-1 text-left"><strong>Adjectives: </strong>{generateProfile(this.props.data.formValues.charType, this.props.data, 'adjectives')}</div>
                <div id="quirky-fact" className="col-12 mt-1 text-left"><strong>Quirky fact: </strong>{generateProfile(this.props.data.formValues.charType, this.props.data, 'quirkyFact')}</div>
                <div id="profession" className="col-12 mt-1 text-left"><strong>Profession: </strong>{generateProfile(this.props.data.formValues.charType, this.props.data, 'profession')}</div>
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