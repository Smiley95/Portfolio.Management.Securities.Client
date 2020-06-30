import Footer from "../Components/Common/Footer";
import Header from "../Components/Common/Header";
import Sidebar from "../Components/Common/Sidebar";
import Content from "./Content";
import React from "react";
class MainLayout extends React.Component {
  static isSidebarOpen() {
    //return true;
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

export default MainLayout;
