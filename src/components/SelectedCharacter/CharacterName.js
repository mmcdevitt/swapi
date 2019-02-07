import React from "react";
import styled from "styled-components";

const CharacterNameWrapper = styled.div`
  visibility: ${props => (props.hide ? "hidden" : null)};
  padding: 30px 0;
  h1 {
    color: #fff;
  }
`;

const CharacterName = props => {
  const { hide } = props;

  return (
    <CharacterNameWrapper className="selected-character-name" hide={hide}>
      <h1>{props.name}</h1>
    </CharacterNameWrapper>
  );
};

export default CharacterName;
