import React, {Component} from 'react';
import {Nav, Navbar, NavItem} from "reactstrap";

function Footer(){
    return(
        <div>
        <div className="container footer">
            <Navbar className="fixed-bottom justify-content-center" dark right>
              <Nav navbar>
                <NavItem >
                     2020  <span className="fa fa-copyright fa-lg align-self-center"></span>  Retro Log
                </NavItem>
              </Nav>
            </Navbar>
        </div>
        </div>
    );

}
export default Footer;