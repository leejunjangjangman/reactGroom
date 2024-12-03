import './List.css'
import TodoItem from './Todoitem';


const List = ({todos}) =>{
    
    return(
        <div className='List'>
            <h5>나의 ToDo 리스트📜</h5>

            <input 
            type="text"
            placeholder="검색어를 입력하세요"/>


            {/* 어?? 왜 기존의 <Todoitem /> 지우나요? => 배열매소드로 각각의 리스트 불러오던 컴포넌트를 한줄로 정리할 수 있슴 */}
            {/* 앱이 가진 데이터값을 결국 item컴포넌트로 리드시킬거기 때문에 구조분해할당으로 todo초기값을 넣어서 렌더한다 */}
            {/* 하여 리스트형태로 이데이터를 반복적으로 나열시킬거면 배열메소드인 .map()를 사용하여 기능시킬수있다 */}
            {/* 외워! {state변수.map( ()=>{ return sometihg } )} */}

            <div className= 'TodosFrame'>
                {todos.map((todo)=>{
                    return <TodoItem key={todo.id} {...todo}/>;
               })}

            </div>

        </div>
    )
};



export default List; 