function Todoitem(props){

    const activityArr = props.activityArr
    const setActivyArr = props.setActivy

    function handleDelete(deleteid){
        
        var temarr = activityArr.filter(function(item){

            if (item.id === deleteid){
                return false
            }else{
                return true
            }
        })
        setActivyArr(temarr)
    }

    return(
        <div className="display flex justify-between">
            <p>{props.index+1}.{props.items.activity}</p>
            <button className="text-red-500" onClick={()=>handleDelete(props.id)}>Delete</button>
        </div>
        
    )
}

export default Todoitem