import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Label, Row, Col, Button } from 'reactstrap';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { Control, LocalForm} from 'react-redux-form';
var changePage = false;

class CreateChar extends Component {
  constructor(props) {
    super(props);
    // sets change/page to false so charform will load after instructions page

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
    // console.log("Current state is: " + JSON.stringify(values));
    changePage = true;
    this.props.setChanged(values);


    // console.log("Gender:", values.charGender)
    // console.log("Age:", values.charAge) 
    // console.log("Type:", values.charType) 
  }

  redirectToProfile() {
    // console.log(changePage)
    if (changePage) {
      changePage = false;
      this.props.data.profile.type = 'createYourOwn'
      this.props.data.formValues.charType = 'createYourOwn'
      return <Redirect to='/profileready' />
    }
  }

  render() {
    // console.log("Data", this.props.data)
    return (
      <div className="container">
        <div className="row row-content">
          <div className="col-12">
            <Card className="custom-card">
              <CardHeader className="bg-gradient"><h2 className="text-white text-center">Create your character</h2></CardHeader>
              <CardBody>
                <LocalForm onSubmit={values => this.handleSubmit(values)}>
                  <Row className="form-group row">
                    <Label className="col-lg-3" htmlFor="createName">Name</Label>
                    <Col className="col-lg-9">
                      <Control.text model=".createName" className="form-control" name="createName" id="createName">
                      </Control.text>
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label className="col-lg-3" htmlFor="createAge">Age</Label>
                    <Col className="col-lg-9">
                      <Control.text model=".createAge" className="form-control" name="createAge" id="createAge">
                      </Control.text>
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label className="col-lg-3" htmlFor="createHoroscope">Horoscope</Label>
                    <Col className="col-lg-9">
                      <Control.text model=".createHoroscope" className="form-control" name="createHoroscope" id="createHoroscope">
                      </Control.text>
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label className="col-lg-3" htmlFor="createBio">Bio</Label>
                    <Col className="col-lg-9">
                      <Control.textarea model=".createBio" className="form-control" name="createBio" id="createBio" rows="5">
                      </Control.textarea>
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label className="col-lg-3" htmlFor="createAdjectives">Adjectives</Label>
                    <Col className="col-lg-9">
                      <Control.text model=".createAdjectives" className="form-control" name="createAdjectives" id="createAdjectives">
                      </Control.text>
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label className="col-lg-3" htmlFor="createQuirkyFact">Quirky Fact</Label>
                    <Col className="col-lg-9">
                      <Control.text model=".createQuirkyFact" className="form-control" name="createQuirkyFact" id="createQuirkyFact">
                      </Control.text>
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label className="col-lg-3" htmlFor="createProfession">Profession</Label>
                    <Col className="col-lg-9">
                      <Control.text model=".createProfession" className="form-control" name="createProfession" id="createProfession">
                      </Control.text>
                    </Col>
                  </Row>
                  <Row className="form-group mt-4">
                    <Col className="btn-group">
                      <Button type="submit" className="btn btn-lg text-white bg-blue button-hover-bg-gradient"><i className="fa fa-transgender-alt fa-lg"></i> Create</Button>
                      <Link to='/choosefeaturesform' role="button" className="btn btn-secondary btn-lg">Back</Link>
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

export default CreateChar;