import LDSlogo from "../../img/LDSlogo.png";
import LDSside from "../../img/LDSside.jpg";
import React from "react";
import {
  MdAccountCircle,
  MdArrowDropDownCircle,
  MdBorderAll,
  MdBrush,
  MdChromeReaderMode,
  MdDashboard,
  MdExtension,
  MdGroupWork,
  MdInsertChart,
  MdKeyboardArrowDown,
  MdNotificationsActive,
  MdPages,
  MdRadioButtonChecked,
  MdSend,
  MdStar,
  MdTextFields,
  MdViewCarousel,
  MdViewDay,
  MdViewList,
  MdWeb,
  MdWidgets,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import {
  // UncontrolledTooltip,
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavbarBrand,
  NavLink as BSNavLink,
} from "reactstrap";
import bn from "../../utils/bemnames";

const sidebarBackground = {
  backgroundImage: `url("${LDSside}")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const navItems = [
  { to: "/", name: "dashboard", exact: true, Icon: MdDashboard },
  { to: "/portfolios", name: "portfolios", exact: false, Icon: MdViewList },
  { to: "/statistics", name: "statistics", exact: false, Icon: MdInsertChart },
  { to: "/optimizer", name: "optimizer", exact: false, Icon: MdWidgets },
  { to: "/login", name: "logout", exact: false, Icon: MdAccountCircle },
];

const bem = bn.create("sidebar");

class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
  };

  handleClick = (name) => () => {
    this.setState((prevState) => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside className={bem.b()} data-image={LDSside}>
        <div className={bem.e("background")} style={sidebarBackground} />
        <div className={bem.e("content")}>
          <Navbar>
            <NavbarBrand href="/">
              <img
                src={LDSlogo}
                width="40"
                height="30"
                className="pr-2"
                alt="Linedata logo"
              />
              <span className="text-white">Linedata</span>
            </NavbarBrand>
          </Navbar>
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e("nav-item")}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e("nav-item-icon")} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
