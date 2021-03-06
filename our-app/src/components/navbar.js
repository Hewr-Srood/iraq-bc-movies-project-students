import React, { Component } from 'react'; 
import { Nav, NavItem, NavDropdown, MenuItem, Form, FormControl, Button } from 'react-bootstrap';

export default function Navbar(){
return (<>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search Movie or Actors" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <br />
  </>
)
  }