import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Label, Button } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
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
                  <div className="form-group">
                    <Label htmlFor="createName">Name</Label>
                      <Control.text id="createName" model=".createName" className="form-control" name="createName">
                      </Control.text>
                  </div>
                  <div className="form-group">
                    <Label htmlFor="createAge">Age</Label>
                      <Control.text id="createAge" model=".createAge" className="form-control" name="createAge">
                      </Control.text>
                  </div>
                  <div className="form-group">
                    <Label htmlFor="createHoroscope">Horoscope</Label>
                      <Control.text id="createHoroscope" model=".createHoroscope" className="form-control" name="createHoroscope" >
                      </Control.text>
                  </div>
                  <div className="form-group">
                    <Label className="col-lg-3" htmlFor="createBio">Bio</Label>
                      <Control.textarea id="createBio" model=".createBio" className="form-control" name="createBio" rows="5">
                      </Control.textarea>
                  </div>
                  <div className="form-group">
                    <Label className="col-lg-3" htmlFor="createAdjectives">Adjectives</Label>
                      <Control.text id="createAdjectives" model=".createAdjectives" className="form-control" name="createAdjectives">
                      </Control.text>
                  </div>
                  <div className="form-group">
                    <Label className="col-lg-3" htmlFor="createQuirkyFact">Quirky Fact</Label>
                      <Control.text id="createQuirkyFact" model=".createQuirkyFact" className="form-control" name="createQuirkyFact">
                      </Control.text>
                  </div>
                  <div className="form-group">
                    <Label className="col-lg-3" htmlFor="createProfession">Profession</Label>
                      <Control.text id="createProfession" model=".createProfession" className="form-control" name="createProfession">
                      </Control.text>
                  </div>
                  <div className="form-group mt-4">
                      <Button type="submit" className="btn btn-lg text-white bg-blue button-hover-bg-gradient"><i className="fa fa-transgender-alt fa-lg"></i> Create</Button>
                      <Link to='/choosefeaturesform' role="button" className="btn btn-secondary btn-lg">Back</Link>
                  </div>
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