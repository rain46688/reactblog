import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let blog = 'ReactBlog';
  // state를 사용하는건 변동시 자동으로 html에 반영되게 만들고
  // 싶으면 state를 사용한다.
  let [글제목, b] = useState(['남자 코트 추천','여자 코드 추천','남자 가디건 추천']);
  // 앞에는 state 저장한 변수가 담겨지고, 뒤에 변수에는 함수가 담겨짐
 // let [a,b] = [1,2] destructuring 문법이있다고함 a에1이 들어가고 b에 2가 들어감
 // useState하면 저런 형식으로 데이터가 남게되고 해당 방식으로 담겨짐

 let [따봉, 따봉변경] = useState(0);


  return (
    <div className="App">
      {/* 이건 JSX라는 언어임 
      className이라고 적어야됨!
      */}
      <div className="black-nav">
        {/*  스타일 코드 짤때 이런식으로 key value로 넣어야됨, - 이어지는건 카멜 케이스로 변환해야됨 */}
        <h4 style={{color : 'red', fontSize : '16px'}}>{ blog }</h4>
      </div>
     
      <div className="list" onClick={() => {b(['여자 코트 추천','여자 코드 추천','남자 가디건 추천'])}}>
        {/* 추천 버튼 클릭하면 +1되게 하기 state는 =로 사용해서 증가시키면 안됨! */}
        <h4>{ 글제목[0] }  <span onClick={ () =>{ 따봉변경(따봉+1) } }>👍</span> { 따봉 }</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>

    </div>
  );
}

export default App;
