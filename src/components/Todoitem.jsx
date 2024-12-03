import './Todoitem.css'



const TodoItem = ({id, isdone, content, date}) =>{
    return (

        <div className= 'TodoItem'>

            <input
            readOnly checked= {isdone} 
            type= "checkbox"/>

          
            

            <div className= "content"> {content} </div>
            
            <div className= "date"> {new Date(date).toLocaleDateString()} </div> 
            
            <button>삭제 </button>
        
        </div>
    )
}

export default TodoItem;