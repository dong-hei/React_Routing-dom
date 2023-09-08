import { styled } from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

//자바스크립트의 문법이 들어옴
let T = document.createElement('h1');
T.style.color = 'red';

//styled-components 디자인을 동적으로 만들어주고 디자인할때 css문법을 그대로 사용한다.
//재사용성이 좋아진다. (각 디자인이 컴포넌트화되어서 보기도 편하고 유지보수하기좋고 js와 css가 합쳐져서 사용하기 편리하다)
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

//페이지는 컴포넌트들의 조합 즉 컴포넌트들을 만들어놓으면 재사용 가능하다.
//React는 SinglePage기 때문에 a태그를 못씀 고로 React-router-dom을 받아서 Navigate를 해야한다.
function App() {
  return (
    <>
      <Header />
      <Route path="/" exact={true} component={HomePage} />
      {/* 어떤게 읽어질지 결정한다 path가 / 면 HomePage가 읽어질것이다. */}
      <Route path="/login/:id" exact={true} component={LoginPage} />
      {/* 뒤에 아이디 값을 넣어야 제대로 이동함 */}
      {/* exact : path를 정확하게 읽어라 (정확하게 true를 안해주면 슬래쉬로 시작하는건 다 읽는다.)*/}
      <Footer />
    </>
  );
}

export default App;
