import React from "react";
import { shallow, mount } from "enzyme";

import App from "./App";
import StarWars from "./containers/StarWars";
import SelectFilmsContainer from "./containers/SelectFilmsContainer";
import RootProvider from "./RootProvider";

describe("App", () => {
  it("renders a Star Wars component without crashing", () => {
    const wrapped = shallow(<App />);
    expect(wrapped.find(StarWars).length).toEqual(1);
  });

  it("creates a list item per character", () => {
    const wrapped = mount(<App />);
    expect(wrapped.find("li.character-list-item").length).toEqual(4);
    wrapped.unmount();
    wrapped.update();
  });
});

describe("SelectFilmsContainer", () => {
  it("creates a list item per character", () => {
    const wrapped = mount(<App />);
    expect(wrapped.find("li.character-list-item").length).toEqual(4);
    wrapped.unmount();
  });
});
