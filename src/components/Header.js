import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { styled } from 'styled-components';

//하나의 컴포넌트를 생성한것이다. (재사용을 위해)
const StyledHeaderDiv = styled.div`
  border: 1px solid black;
  height: 300px;
  background-color: ${(props) => props.backgroundColor};
`;

//링크 스타일링
const StyledHeaderLink = styled(Link)`
  color: white;
`;

const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link to="/" className="navbar-brand">
            The Board (Made By Dk)
          </Link>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              홈으로
            </Link>
            <Link to="/login" className="nav-link">
              로그인 페이지
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    // a태그를 사용하면 페이지를 열때마다 새로고침되서 사용하면 안된다.
  );
};

export default Header;
