
import './App.css'

import Editor from './components/Editor'
import List from './components/List'
import Header from './components/Header'

import { useState, useRef } from 'react'

// 임시데이터를 만든 코드입니다.
const MockData = [
  

  
  {
  id: 0,
  isdone : false,
  content: "목업입니다",
  date: new Date().getTime(),
  }
  

];



function App() {

  const [todos, setTodos] = useState(MockData);
  const idRef = useRef(1)
  // console.log(todos)
  //목업 데이터 구조를 만들었으니 목업데이터를 변경해줄 놈을 만들어야함
  // 즉, 목업데이터와 동일한 객체를 가진 set함수(SetTodos)의 작동방식을 아래와 같이  목업 데이터와 동일하게 설정해줘야함
  const onCreateTodo = (content) => {

    const newTodo = {
      // useRef를 활용하면 아이디 값은 변경시키면서 객체 구분을 해주고 업데이트 시키지 않기 때문에 리렌더링
      // 일어나지 않음!
      id: idRef.current ++,
      isdone: false,
      // 참고. content객체의 객체 값{}는 onCreateTodo 함수의 매개변수가 자리해야함
      // 컨텐츠만 타겟팅해서 초기값인(todos)에 전달해야하기 때문임. 
      content: content,
      date: new Date().getTime(),
    }
    //위와 같이 새로운 투두데이터의 객체를 설정했으면 이 객체를 전달할 setTodos를 아래와 같이 설정해준다
    // 이때 스프레드 연산자를 활용해서 기존 초기값의 객체배열은 유지하고 content의 값만 변경되서 전달할 수 있게한다

    // setTodos( ...todos, newTodo); 실패사례....왜냐면 배열대괄호를 쓰지않았기 때문
    setTodos([newTodo,...todos]);

  }


  console.log(todos)
  return (

    <div className='App'>

    <Header />

    <Editor onCreate={onCreateTodo}/>
    
    <List todos = {todos}/>
    
    </div>

  )
}

export default App
