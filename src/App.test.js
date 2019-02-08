import React from "react";
import { shallow, mount } from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import App from "./App";
import StarWars from "./containers/StarWars";
import SelectFilmsContainer from "./containers/SelectFilmsContainer";
import MoviesContainer from "./containers/MoviesContainer";
import SelectedCharacter from "./components/SelectedCharacter";
import RootProvider from "./RootProvider";

import { selectCharacter } from "./actions/character";
import characterReducer from "./reducers/characterReducer";

describe("App", () => {
  it("renders a Star Wars component without crashing", () => {
    const wrapped = shallow(<App />);
    expect(wrapped.find(StarWars).length).toEqual(1);
  });
});

describe("SelectedCharacter", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      characters: {
        collection: [
          {
            name: "Luke Skywalker",
            url: "https://swapi.co/api/people/1/"
          },
          {
            name: "Darth Vader",
            url: "https://swapi.co/api/people/4/"
          },
          {
            name: "Obi-wan Kenobi",
            url: "https://swapi.co/api/people/unknown/"
          },
          {
            name: "R2-D2",
            url: "https://swapi.co/api/people/3/"
          }
        ]
      }
    };

    wrapper = mount(
      <RootProvider initialState={initialState}>
        <SelectedCharacter>
          <SelectFilmsContainer />
        </SelectedCharacter>
        <MoviesContainer />
      </RootProvider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("should create 4 list items for each character", () => {
    expect(wrapper.find("li.character-list-item").length).toEqual(4);
  });

  it("should render the correct name of the character as the value prop of each radio btn", () => {
    expect(wrapper.find("#luke-skywalker-radio").props().value).toEqual(
      "Luke Skywalker"
    );
    expect(wrapper.find("#darth-vader-radio").props().value).toEqual(
      "Darth Vader"
    );
    expect(wrapper.find("#obi-wan-kenobi-radio").props().value).toEqual(
      "Obi-wan Kenobi"
    );
    expect(wrapper.find("#r-2-d-2-radio").props().value).toEqual("R2-D2");
  });

  it("should render the selected characters name in the H1 tag", () => {
    wrapper.find("#luke-skywalker-radio").simulate("change", {
      target: { value: "Luke Skywalker" }
    });

    expect(
      wrapper
        .find("#selected-character-name h1")
        .render()
        .text()
    ).toEqual("Luke Skywalker");
  });
});

describe("Mock Redux", () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  it("should fetch the correct number of movies for Luke Skywalker", done => {
    const store = mockStore({});

    return store
      .dispatch(
        selectCharacter({
          name: "Luke Skywalker",
          url: "https://swapi.co/api/people/1/"
        })
      )
      .then(() => {
        const actions = store.getActions();
        const newState = characterReducer(
          {
            loading: false,
            data: {},
            films: [],
            error: null
          },
          actions[1]
        );
        expect(newState.films.length).toEqual(5);
        done();
      });
  });
});
