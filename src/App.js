import logo from './logo.svg';
import './App.css';

function App() {

  let post = '강남 우동 맛집';

  return (
    <div className="App">
      {/* 이건 JSX라는 언어임 
      className이라고 적어야됨!
      */}
      <div className="black-nav">
        {/*  스타일 코드 짤때 이런식으로 key value로 넣어야됨, - 이어지는건 카멜 케이스로 변환해야됨 */}
        <h4 style={{color : 'red', fontSize : '16px'}}>블로그임</h4>
      </div>
      {/* 중괄호를 써서 이렇게 변수를 집어넣을수 있음, 데이터 바인딩이라는것 */}
      <h4>{ post }</h4>
    </div>
  );
}

export default App;
