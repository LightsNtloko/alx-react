import React from "react";
import { shallow } from "enzyme";
import WithLogging from "./WithLogging";

const TestComponent = () => <p>Test Component</p>;

describe("WithLogging HOC tests", () => {
  it("should call console.log on mount and unmount", () => {
    const spy = jest.spyOn(console, "log").mockImplementation();
    const NewComponent = WithLogging(TestComponent);
    const wrapper = shallow(<NewComponent />);

    // Check if log is called on mount
    expect(spy).toBeCalledTimes(1);
    wrapper.unmount();

    // Check if log is called on unmount
    expect(spy).toBeCalledTimes(2);
    spy.mockRestore();
  });

  it("should log correct messages on mount and unmount", () => {
    const spy = jest.spyOn(console, "log").mockImplementation();
    const NewComponent = WithLogging(TestComponent);
    const wrapper = shallow(<NewComponent />);

    // Check if the correct mount message is logged
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith("Component TestComponent is mounted");

    wrapper.unmount();

    // Check if the correct unmount message is logged
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toBeCalledWith("Component TestComponent is going to unmount");

    spy.mockRestore();
  });
});
