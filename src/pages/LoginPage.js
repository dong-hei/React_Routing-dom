import Body from '../components/Body';

const LoginPage = (props) => {
  const { history } = props;
  return (
    <div>
      <button onClick={() => history.push('/')}>뒤로가기</button>
      <Body />
    </div>
  );
};

export default LoginPage;
