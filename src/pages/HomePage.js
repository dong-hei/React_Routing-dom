import Home from '../components/Home/Home';
import { useEffect, useState } from 'react';

const HomePage = () => {
  //board를 받았다는 가정하에 http 요청 (fetch, axios(다운)),
  //http 요청에서 boards가 반드시 상태값이여야 한다.
  // (다운로드 되면 다시 리턴을 해야하기때문)
  const [boards, setBoards] = useState([]);
  const [user, setUser] = useState([]);

  //빈배열 한번만 실행
  useEffect(() => {
    let data = [
      { id: 1, title: '하이!', content: '반갑습니다!' },
      { id: 2, title: '니하오!', content: '반갑습니다..!' },
      { id: 3, title: '봉주르!', content: '반갑습니다' },
    ];

    //다운로드가 안된상테에서 빈데이터가 들어간다.
    setBoards([...data]); // 다운로드 받았다는 가정
    setUser({ id: 7, username: 'dk' });
  }, []);
  return <Home boards={boards} setBoards={setBoards} user={user} />;
  // 이렇게 Homepage에서 받은 데이터를 Home으로 넘길수있는데 이것을 props라고한다.
};

export default HomePage;
