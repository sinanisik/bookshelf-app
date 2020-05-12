import React, { Component } from "react";

export default class MainLayout extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.title = this.props.title;
  }
  render() {
    const Children = this.props.children;
    return (
      <div>
        <Children />
      </div>
    );
  }
}
