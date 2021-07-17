import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Label, Row, Col, Button } from 'reactstrap';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { Control, LocalForm} from 'react-redux-form';
import { Fade } from 'react-animation-components';
import Profile from './ProfileReadyComponent';



// const name = NAMES_MALE.filter(name => NAMES_MALE[Math.floor(Math.random()*NAMES_MALE.length)].name)


class RenderChooseFeaturesForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // touched: {
      //   charGender: false,
      //   charAge: false,
      //   charType: false
      // },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectToProfile = this.redirectToProfile.bind(this);

  }

  handleSubmit (values) {
    this.props.data.changePage = true
    this.props.setChanged(values);

    // console.log("Current state is: " + JSON.stringify(values));
    // console.log("Gender:", values.charGender)
    // console.log("Age:", values.charAge) 
    // console.log("Type:", values.charType) 
  }

  redirectToProfile() {
    if (this.props.data.changePage) {
    return <Redirect to='/profileready' />
    }
  }

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
              <LocalForm onSubmit={values => this.handleSubmit(values)}>
                <Row className="form-group">
                  <Label lg={3} htmlFor="charGender">Gender</Label>
                  <Col lg={9}>
                    <Control.select model=".charGender" id="charGender" className="form-control" name="charGender">
                      <option selected disabled>Select...</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="androgen">Androgyne</option>
                      <option value="neutral">Gender Nonconforming</option>
                    </Control.select>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label className="col-lg-3 col-form-label" htmlFor="charAge">Age range</Label>
                  <Col className="col-lg-9">
                    <Control.select model=".charAge" id="charAge" className="form-control" name="charAge">
                      <option selected disabled>Select...</option>
                      <option value="10-19">10 - 19</option>
                      <option value="20-29">20 - 29</option>
                      <option value="30-39">30 - 39</option>
                      <option value="40-49">40 - 49</option>
                      <option value="50-59">50 - 59</option>
                      <option value="59+">59+</option>
                    </Control.select>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label className="col-lg-3 col-form-label" htmlFor="charType">Type</Label>
                  <Col className="col-lg-9">
                    <Control.select model=".charType" className="form-control" name="charType" id="charType">
                      <option selected disabled>Select...</option>
                      <option value="famous">Famous</option>
                      <option value="notFamous">Not famous</option>
                      <option value="createYourOwn">Create your own</option>
                    </Control.select>
                  </Col>
                </Row>
                <Row className="form-group mt-4">
                  <Col>
                    <Button type="submit" className="col btn btn-lg text-white bg-blue button-hover-bg-gradient">
                      <i className="fa fa-transgender-alt fa-lg" /> Generate
                    </Button>
                  </Col>
                </Row>
              </LocalForm>
              </CardBody>
            </Card>
            {this.redirectToProfile()}
          </div>
        </div>
      </div>
    );
  }
}

export default RenderChooseFeaturesForm;