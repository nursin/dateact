import React, { Component } from 'react';

class Contact extends Component {

  render() {
    return (
      <div class="container">
        <div class="row mt-4">
          <div class="col">
            <h2>Contact us</h2>
            <hr />
          </div>
        </div>
        <div class="row row-content">
          <div class="col-lg-12">
            <div class="card custom-card">
              <div class="card-header bg-gradient"><h3 class="text-white text-center mt-1" >Send us your feedback</h3></div>

              <div class="card-body">

                <form>
                  <div class="form-group row">
                    <label for="firstName" class="col-md-2 col-form-label">First Name</label>
                    <div class="col-md-10">
                      <input class="form-control" type="text" id="firstName" name="firstName" placeholder="First Name" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="lastName" class="col-md-2 col-form-label">Last Name</label>
                    <div class="col-md-10">
                      <input class="form-control" type="text" id="lastName" name="lastName" placeholder="Last Name" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="areaCode" class="col-md-2 col-form-label">Contact Tel.</label>
                    <div class="col-5 col-md-3">
                      <input class="form-control" type="tel" id="areaCode" name="areaCode" placeholder="Area Code" />
                    </div>
                    <div class="col-7">
                      <input class="form-control" type="tel" id="telNum" name="telNum" placeholder="Tel. Number" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="email" class="col-md-2 col-form-label">Email</label>
                    <div class="col-md-10">
                      <input class="form-control" type="email" id="email" name="email" placeholder="Email" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col offset-md-2">
                      May we contact you?
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="contactYes" name="contactRadios" value="yes" />
                        <label class="form-check-label" for="contactYes">Yes</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="contactNo" name="contactRadios" value="no" />
                        <label class="form-check-label" for="contactNo">No</label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="feedback" class="col-md-2 col-form-label">Your Feedback</label>
                    <div class="col-md-10">
                      <textarea class="form-control" id="feedback" name="feedback" rows="8"></textarea>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="offset-md-2 col-md-10">
                      <button class="btn btn-primary bg-blue button-hover-bg-gradient" type="button">Send Feedback</button>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;