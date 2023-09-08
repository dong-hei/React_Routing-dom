import React from 'react';
import { styled } from 'styled-components';

const StyledBodyDiv = styled.div`
  padding: 30px 0 30px 0;
`;

const Body = () => {
  return (
    <StyledBodyDiv>
      <h1>바디부 입니다.</h1>
    </StyledBodyDiv>
  );
};

export default Body;
