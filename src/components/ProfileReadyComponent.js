import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {

  render() {
    return (
      <div className="container">
        <div className="row row-content">
          <div className="col-12">
            <div className="card custom-card">
              <div className="card-header bg-gradient"><h2 className="text-white text-center" id="profileHeader">Character profile ready</h2></div>
              <div className="card-body col">
                <div id="name" className="col-12"></div>
                <div id="age" className="col-12 mt-1"></div>
                <div id="horoscope" className="col-12 mt-1"></div>
                <div id="type" className="col-12 mt-1"></div>
                <div id="bio" className="col-lg-9 mt-1"></div>
                <div id="adjectives" className="col-12 mt-1"></div>
                <div id="quirky-fact" className="col-lg-9 mt-1"></div>
                <div id="profession" className="col-12 mt-1"></div>
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