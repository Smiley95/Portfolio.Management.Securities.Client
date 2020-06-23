import React from "react";
import LDSlogo from "../../img/LDSlogo.png";

import { Navbar, Nav, Row, NavItem } from "reactstrap";

import SourceLink from "../../utils/SourceLink";

const Footer = () => {
  return (
    <Navbar>
      <Nav navbar>
        <NavItem>
          <Row>
            <img
              src={LDSlogo}
              width="40"
              height="30"
              className="pr-2"
              alt="Linedata logo"
            />
            Copyright © <SourceLink>Linedata</SourceLink>, 2020. All Rights
            Reserved.
          </Row>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
