import rootReducer from "../reducers/rootReducer"; // Import the combined reducer
import { fromJS } from "immutable";

describe("rootReducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      courses: fromJS({}),
      notifications: fromJS({}),
      ui: fromJS({}),
    };

    const state = rootReducer(undefined, { type: "@@INIT" });

    expect(state.toJS()).toEqual(initialState); // Check if the initial state matches the structure
  });
});
