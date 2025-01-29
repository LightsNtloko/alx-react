import React, { Component } from "react";

const WithLogging = (WrappedComponent) => {
  const getDisplayName = (WrappedComponent) =>
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const HOC = class extends Component {
    componentDidMount() {
      console.log(`Component ${getDisplayName(WrappedComponent)} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${getDisplayName(WrappedComponent)} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  HOC.displayName = `WithLogging(${getDisplayName(WrappedComponent)})`;

  return HOC;
};

export default WithLogging;
