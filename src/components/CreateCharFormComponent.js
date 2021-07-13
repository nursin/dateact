import React, { Component } from 'react';

class CreateChar extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div id="createOwnCharacterForm" className="col-12">
            <div className="card custom-card">
              <div className="card-header bg-gradient"><h2 className="text-white text-center">Create your character</h2></div>
              <div className="card-body">
                <form>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label" htmlFor="createName">Name</label>
                    <div className="col-lg-9">
                      <input type="text" className="form-control" name="createName" id="createName" required>
                      </input>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label" htmlFor="createAge">Age</label>
                    <div className="col-lg-9">
                      <input type="text" className="form-control" name="createAge" id="createAge" required>
                      </input>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label" htmlFor="createHoroscope">Horoscope</label>
                    <div className="col-lg-9">
                      <input type="text" className="form-control" name="createHoroscope" id="createHoroscope" required>
                      </input>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label" htmlFor="createBio">Bio</label>
                    <div className="col-lg-9">
                      <textarea type="text" className="form-control" name="createBio" id="createBio" rows="5" required>
                      </textarea>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label" htmlFor="createAdjectives">Adjectives</label>
                    <div className="col-lg-9">
                      <input type="text" className="form-control" name="createAdjectives" id="createAdjectives" required>
                      </input>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label" htmlFor="createQuirkyFact">Quirky Fact</label>
                    <div className="col-lg-9">
                      <input type="text" className="form-control" name="createQuirkyFact" id="createQuirkyFact" required>
                      </input>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label" htmlFor="createProfession">Profession</label>
                    <div className="col-lg-9">
                      <input type="text" className="form-control" name="createProfession" id="createProfession" required>
                      </input>
                    </div>
                  </div>
                  <div className="form-group row mt-4">
                    <div className="col btn-group">
                      <button type="button" id="generateCreateOwnProfileBtn" className="btn btn-lg text-white bg-blue button-hover-bg-gradient"><i className="fa fa-transgender-alt fa-lg" aria-hidden="true"></i> Create</button>
                      <a role="button" id="backBtn" className="btn btn-secondary btn-lg">Back</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateChar;