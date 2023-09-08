import React from 'react';
import { styled } from 'styled-components';

//하나의 컴포넌트를 생성한것이다. (재사용을 위해)
const StyledHeaderDiv = styled.div`
  border: 1px solid black;
  height: 300px;
  background-color: ${(props) => props.backgroundColor};
`;

const Header = () => {
  return (
    <StyledHeaderDiv backgroundColor="skyblue">
      <div>
        <ul>
          <li>메뉴 1 </li>
          <li>메뉴 2 </li>
        </ul>
      </div>
    </StyledHeaderDiv>
  );
};

export default Header;
