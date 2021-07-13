import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

class RenderChooseFeaturesForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="row row-content">
          <div className="col-12">
            <Card className="custom-card">
              <CardHeader className="bg-gradient" >
                <h2 className="text-white text-center">Choose character features</h2>
              </CardHeader>
              <CardBody>
                <form>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label" htmlFor="charGender">Gender</label>
                    <div className="col-lg-9">
                      <select className="form-control" name="charGender" id="charGender" required>
                        <option selected disabled>Select...</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="androgen">Androgyne</option>
                        <option value="neutral">Gender Nonconforming</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label" htmlFor="charAge">Age range</label>
                    <div className="col-lg-9">
                      <select className="form-control" name="charAge" id="charAge">
                        <option selected disabled>Select...</option>
                        <option value="10-18">10 - 18</option>
                        <option value="19-29">19 - 29</option>
                        <option value="30-39">30 - 39</option>
                        <option value="40-49">40 - 49</option>
                        <option value="50-59">50 - 59</option>
                        <option value="59+">59+</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label" htmlFor="charType">Type</label>
                    <div className="col-lg-9">
                      <select className="form-control" name="charType" id="charType">
                        <option selected disabled>Select...</option>
                        <option value="famous">Famous</option>
                        <option value="notFamous">Not famous</option>
                        <option value="createYourOwn">Create your own</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row mt-4">
                    <div className="col">
                      <Link type="button" to="/profileready" className="col btn btn-lg text-white bg-blue button-hover-bg-gradient"><i className="fa fa-transgender-alt fa-lg" ></i> Generate</Link>
                    </div>
                  </div>
                </form>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default RenderChooseFeaturesForm;