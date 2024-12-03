import './Editor.css'
import { useState, useRef } from 'react';

const Editor = ({onCreate}) =>{

    const [newContent, setNewContent] = useState("");
    const newContentRef = useRef()

    const onChangeNewContent = (event)=>{
        setNewContent(event.target.value)

    }


    const onKeydown = (e) => {
        if(e.key === "Enter"){
            onSubmit();
        }
    }

    //이코드엔 다음과 같은 기능이 있음
    //1. 유저가 추가 버튼을 눌렀을 경우, 빈문자열이라면 값을 전달(반환)하지 않고 포커스상태처리한다
    //2. 유저가 문자열을 입력하고 버튼을 눌러 제출이 완료되었을 경우, 작성한 인풋필드의 문자열내용을 지운다
    const onSubmit = () =>{
        if(newContent === ""){
            newContentRef.current.focus()
            return;
        }
        onCreate(newContent)
        setNewContent("")
    }
    
    
    return(
        <div className='Editor'>
            
            <input
            ref = {newContentRef}
            onKeyDown = {onKeydown}
            value = {newContent} 
            onChange = {onChangeNewContent}
            placeholder ='오늘은 무엇을 계획중인가요?...'/>

            <button onClick={onSubmit}>추가</button>

        </div>
    )
};



export default Editor;