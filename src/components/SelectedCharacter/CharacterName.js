import React from "react";
import styled from "styled-components";

const CharacterNameWrapper = styled.div`
  visibility: ${props => (props.visibility ? "hidden" : null)};
  padding: 30px 0;
  h1 {
    color: #fff;
  }
`;

const CharacterName = props => {
  const { invisible } = props;

  return (
    <CharacterNameWrapper visibility={invisible}>
      <h1>{props.name}</h1>
    </CharacterNameWrapper>
  );
};

export default CharacterName;
