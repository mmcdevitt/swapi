import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { kebabCase } from "lodash";
import Container from "../UI/Container/Container";
import Flex from "../UI/Flex/Flex";
import CharacterName from "./CharacterName";

const Background = styled.div`
  background-image: ${props => props.image};
  height: 600px;
  background-size: cover;
  background-position: center;
`;

class SelectedCharacter extends Component {
  render() {
    const { character } = this.props;

    const charImage = character.name ? character.name : "default";
    const bgImage = `url(${process.env.PUBLIC_URL}/images/${kebabCase(
      charImage
    )}.jpg)`;

    return (
      <Background image={bgImage} className="hero">
        <Container>
          <Flex direction="column" height="inherit">
            <Flex shortHand="1 1 auto">
              <CharacterName name={character.name} hide />
            </Flex>
            <Flex jContent="center">{this.props.children}</Flex>
            <Flex shortHand="1 1 auto" vAlign="flex-end" media="center">
              <CharacterName
                name={character.name}
                id="selected-character-name"
              />
            </Flex>
          </Flex>
        </Container>
      </Background>
    );
  }
}

function mapStateToProps(state) {
  const { data } = state.selectedCharacter;

  return {
    character: data
  };
}

export default connect(mapStateToProps)(SelectedCharacter);
