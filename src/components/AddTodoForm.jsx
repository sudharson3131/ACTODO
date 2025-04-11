import { useState } from "react"

function AddTodoForm(props){
    const activityArr = props.activityArr
    const setActivy = props.setActivy

    const [newActivity,setNewActivity] = useState("")

    function handleChange(event){
        setNewActivity(event.target.value)
    }
    
    function addActivity(){
        setActivy([...activityArr,{id:activityArr.length+1,activity:newActivity}])
        setNewActivity("")
    }


    return(
        
            <div className="flex flex-col gap-3"> 
                    <h1 className="text-2xl font-medium">Manage Activities</h1>
                    <div>
                    <input value={newActivity} onChange={handleChange} type="text" className="border border-black bg-transparent p-1" placeholder="next activity?"/>
                    <button onClick={addActivity} className="bg-black text-white p-1 border border-black">Add</button>
                    </div>
                    
                </div>
       
    )
}

export default AddTodoForm