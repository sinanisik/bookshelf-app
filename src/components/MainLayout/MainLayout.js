import React, { Component } from "react";
import { Container } from "reactstrap";

class MainLayout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    const Children = this.props.children;
    return <Children />;
  }
}

export default MainLayout;
