import React from 'react';
import { styled } from 'styled-components';

let StyledDeleteBtn = styled.button`
  color: ${(props) => (props.user.username === 'DK' ? 'skyblue' : 'gray')};
`;

let StyledAddBtn = styled(StyledDeleteBtn)`
  color: ${(props) => (props.user.username === 'DK' ? 'skyblue' : 'gray')};
  background-color: aliceblue;
`;
//StyleDeleteBtn을 상속받았다.

//props를 사용했기때문에 받고싶다면 ()에 적으면 된다.
//부모로 부터 받아온 데이터를 가지고 스타일링 동적으로 하고자 한다면
//그냥 let으로 정의해서 사용하자
const Home = (props) => {
  //구조분할 할당 = props안에 boards와 id 등 다양한 정보가 있을때 사용할수 있는 문법
  const { boards, setBoards, user } = props;

  return (
    <div>
      <StyledAddBtn user={user}>더하기</StyledAddBtn>
      <h1>이 곳은 홈페이지 입니다.</h1>
      <StyledDeleteBtn user={user} onClick={() => setBoards([])}>
        전체 삭제
      </StyledDeleteBtn>
      {boards.map((board) => (
        <h3>
          제목 : {board.title} 내용 : {board.content}
          {/* props(변수)를 패싱(넘긴다)한다. */}
        </h3>
      ))}
    </div>
  );
};

export default Home;
