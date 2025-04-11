import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import { useState } from "react"


function TodoContainer(){
    const [activityArr,setActivy] = useState([
        {
                id:1,
                activity:"wake up 6pm"
        },
        {
                id:2,
                activity:"drink coffee"
        },
        {
                id:3,
                activity:"running 2km"
        }
    ])
    return(
        <div>
            
            <div className="flex gap-5 flex-wrap">
            <AddTodoForm  activityArr={activityArr} setActivy={setActivy}/>
            <TodoList activityArr={activityArr} setActivy={setActivy}/>
           </div>
          
        </div>
    )
}
export default TodoContainer