import { styled } from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

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
function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
