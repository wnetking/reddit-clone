import React from 'react';
import {
  Collapse, Navbar, NavbarToggler, Nav, NavItem, 
} from 'reactstrap';
import {Link} from 'react-router-dom';
import config from '../utils/config.json'

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state  = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle}/>
          <Link to={`${config.pathPrefix}`}className="navbar-brand">Reddit clone</Link>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to={`${config.pathPrefix}add-post`} className="nav-link">Добавить пост</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}