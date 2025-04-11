import { useState } from "react"
import Todoitem from "./TodoItem"



function TodoList(props){
    
        const activityArr = props.activityArr
        const setActivy = props.setActivy

    return(
        
            <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
                <h1 className="text-2xl font-medium">Today Activity</h1>
                    
                    {activityArr.length === 0? <p>you haven't add anything</p>:""}
                    {
                        activityArr.map(function(items,index){
                           return <Todoitem id={items.id} items={items} index={index} activityArr={activityArr} setActivy={setActivy}/>
                        })
                    }
                  
            </div>
        
    )
}

export default TodoList