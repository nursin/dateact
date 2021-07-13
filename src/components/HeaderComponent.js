import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavBarToggler, NavItem, Jumbotron, Button, Modal, ModalHeader, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  render() {
    return(
      <React.Fragment>
        <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div class="col-2 mt-2">
                <a id="logo" href="index.html"><i className="fa fa-transgender-alt fa-5x"/></a>
              </div>
              <div className="col text-left">
                <h1>Date Act</h1>
                <h2>Spice up your date life</h2>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Navbar dark sticky="top" expand="md">
          <div className="container">

          </div>
        </Navbar>
      </React.Fragment>
    )
  }

}

export default Header;