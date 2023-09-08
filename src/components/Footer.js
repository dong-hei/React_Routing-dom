import React from 'react';
import { styled } from 'styled-components';

//하나의 컴포넌트를 생성한것이다. (재사용을 위해)
const StyledFooterDiv = styled.div`
  border: 1px solid black;
  height: 300px;
`;

const Footer = () => {
  return (
    <StyledFooterDiv>
      <div>
        <ul>
          <li>오시는길 : 서울 강남구 언주로 133</li>
          <li>전화번호 : 02-855-7421</li>
        </ul>
      </div>
    </StyledFooterDiv>
  );
};

export default Footer;
