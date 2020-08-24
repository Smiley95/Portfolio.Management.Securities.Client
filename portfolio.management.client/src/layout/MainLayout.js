import Footer from "../Components/Common/Footer";
import Header from "../Components/Common/Header";
import Sidebar from "../Components/Common/Sidebar";
import Content from "./Content";
import { connect } from "react-redux";
import { portfoliosActions } from "../redux/actions/portfoliosActions";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import React from "react";
class MainLayout extends React.Component {
  static isSidebarOpen() {
    return document
      .querySelector(".cr-sidebar")
      .classList.contains("cr-sidebar--open");
  }

  componentWillReceiveProps({ breakpoint }) {
    if (breakpoint !== this.props.breakpoint) {
      this.checkBreakpoint(breakpoint);
    }
  }

  componentDidMount() {
    this.checkBreakpoint(this.props.breakpoint);
    const { portfolios, actions } = this.props;
    actions.loadPortfolios();
    console.log("portfolio is ", portfolios);
  }

  // close sidebar when
  handleContentClick = (event) => {
    // close sidebar if sidebar is open and screen size is less than `md`
    if (
      MainLayout.isSidebarOpen() &&
      (this.props.breakpoint === "xs" ||
        this.props.breakpoint === "sm" ||
        this.props.breakpoint === "md")
    ) {
      this.openSidebar("close");
    }
  };

  checkBreakpoint(breakpoint) {
    switch (breakpoint) {
      case "xs":
      case "sm":
      case "md":
        return this.openSidebar("close");

      case "lg":
      case "xl":
      default:
        return this.openSidebar("open");
    }
  }

  openSidebar(openOrClose) {
    if (openOrClose === "open") {
      //return true;
      return document
        .querySelector(".cr-sidebar")
        .classList.add("cr-sidebar--open");
    }
    document.querySelector(".cr-sidebar").classList.remove("cr-sidebar--open");
  }

  render() {
    const { children } = this.props;
    return (
      <main className="cr-app bg-light">
        <Sidebar />
        <Content
          className="horizontal-scrollable"
          fluid
          onClick={this.handleContentClick}
        >
          <Header />
          {children}
          <Footer />
        </Content>
      </main>
    );
  }
}

MainLayout.propTypes = {
  portfolios: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    portfolios: state.portfolios,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(portfoliosActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
