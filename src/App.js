import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let blog = 'ReactBlog';
  // state를 사용하는건 변동시 자동으로 html에 반영되게 만들고
  // 싶으면 state를 사용한다.
  let [글제목, 글제목변경] = useState(['남자 코트 추천','여자 코드 추천','남자 가디건 추천']);
  // 앞에는 state 저장한 변수가 담겨지고, 뒤에 변수에는 state 변경 함수가 담겨짐  <-- 수정
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

      <button onClick={() => {
        // array에서 = 는 복사하는것이 아닌 array가 가르키는 램의 화살표만 저장하는거
        // state는 둘이 같다고 판단해서 화면 변경을 안해줌 (메모리 절약을 위해서)
        // 그래서 ... 문법으로 아예 새로운 array를 생성해줘야 state가 새로운걸로 바뀐걸 알고 변경 시켜줌
        let copy =[...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
      }}>글수정</button>

      <button onClick={()=>{
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy)
      }}>가나다순정렬</button>
     
      <div className="list">
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

      {/* 컴포넌트 출력 */}
      <Modal/>

    </div>
  );
}

// 리액트 컴포넌트 사용법 App 밖에 함수 생성, 대문자로 생성해야됨
// 다른 함수에서는 당연하지만 state나 변수 선언한거 못가져옴
function Modal(){
  return (
    <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
