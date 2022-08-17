import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let blog = 'ReactBlog';
  // state를 사용하는건 변동시 자동으로 html에 반영되게 만들고
  // 싶으면 state를 사용한다.

  let [글제목, 글제목변경] = useState([
    {title : '남자 코트 추천',
    thumdup : 0,},
    {title : '여자 코트 추천',
    thumdup : 0,},
    {title : '남자 가디건 추천',
    thumdup : 0,}
  ]);

 let [modal, setModal] = useState(false);
 let [index, setIndex] = useState(0);
 let [입력값, 입력값변경] = useState('');

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
     
      {/* <div className="list">
        <h4 onClick={()=>{
          modal == true ? setModal(false) : setModal(true)
        }}>{ 글제목[0] }  <span onClick={ () =>{ 따봉변경(따봉+1) } }>👍</span> { 따봉 }</h4>
        <p>2월 17일 발행</p>
      </div>
       */}

      {/* 여기선 for문을 못쓰기 때문에 map을 사용하면 앞에 나온 array 갯수만큼 반복 실행시켜줌, 원래 map함수의 기능이라함
      파라미터 a는 array 값이고 i는 인덱스 값 return을해주면 ()안의 값을 [,,]배열안에 넣어줌
      리액트에선 배열안에 들어있는 태그들도 알아서 풀어서 화면에 뿌려주니깐 저렇게 적어도 상관없음
      반복되는 태그에서는 서로 구분할수있게 key값에는 변경되는 값을 넣어주면됨, 필수는 아니지만 넣는게 좋음
      */}
      {
        글제목.map((a, i)=>{
          return(
            <div className="list" key={i}>
            <h4 onClick={()=>{
          modal == true ? setModal(false) : setModal(true);
          setIndex(i);
        }}>{ 글제목[i].title }<span onClick={ (e) =>{ 
          // e.stopPropagation(); 사용하면 이벤트가 상위 html로 퍼지는 이벤트버블링을 막아줘서
          // span 태그를 누른다고 상세 모달창이 뜨거나 하지 않고 추천 숫자만 올라감
          e.stopPropagation();
          let copy = [...글제목];
          copy[i].thumdup++;
          글제목변경(copy);
         } }>👍</span> { 글제목[i].thumdup }
         <button onClick={(e)=>{
           e.stopPropagation();
           let copy = [...글제목];
           copy.splice(i,1);
           글제목변경(copy);
         }}>글삭제</button></h4>
            <p>2월 17일 발행</p>
          </div>
          )
        })
      }

      <input onChange={(e)=>{입력값변경(e.target.value);
      console.log(입력값);}} value={입력값}/>
      <button onClick={()=>{
        let copy = [...글제목];
        copy.push({title : 입력값,
        thumdup : 0,});
        글제목변경(copy);
        입력값변경('');
      }}>글등록</button>
      {/* 이렇게 출력하면 처음 입력하면 빈값나오고 다음부터는 잘 나옴 이유는
      비동기 처리를해서 변경되기 전에 첫번째는 콘솔로그가 찍혀서 그렇다함*/}
      

      {/* 컴포넌트 출력 
      if문을 사용못하기 때문에 삼항연산자를 이용해서 넣음 null은 아무것도 없는것
      부모에서 자식으로 state를 넘겨주려면 props를 사용해야된다.
      여러개를 넘겨줄수도있음, 변수명 말고 함수들도 그냥 전송 가능
      */}
      {
        modal == true ? <Modal 글제목변경={글제목변경} index={index} 글제목={글제목}/> : null
      }

    </div>
  );
}

// 리액트 컴포넌트 사용법 App 밖에 함수 생성, 대문자로 생성해야됨
// 다른 함수에서는 당연하지만 state나 변수 선언한거 못가져옴
// props라고 파라미터를 선언하고 이걸 이용해서 값을 가져오면됨
function Modal(props){
  return (
    <div className="modal">
        <h4>{props.글제목[props.index].title}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{
           let copy =[...props.글제목];
           copy[props.index].title = '여자 코트 추천';
           props.글제목변경(copy);
        }}>글수정</button>
      </div>
  )
}

export default App;
