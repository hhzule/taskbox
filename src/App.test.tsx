import React from "react";
import { shallow } from "./components/node_modules/enzyme";
import App from "./App";

test("renders the component", () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
