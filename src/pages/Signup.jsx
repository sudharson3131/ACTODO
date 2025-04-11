import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function SignUp(props){
    const navigate = useNavigate()
    const users = props.users
    const setUsers = props.setUsers

    const[eusername,setEUsername] = useState()
    const[epassword,setEPassword] = useState()

    function handleUInput(evt){
      
        setEUsername(evt.target.value)
    }

    function handlePInput(evt){
        
        setEPassword(evt.target.value)
    }
    
    function addUsers(){
       setUsers([...users,{username:eusername,password:epassword}])
       navigate("/")
    }





    return(
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium"> Hey Hi</h1>
                <p>I help you managae your activity after you login :)</p>

                <div className="flex flex-col gap-2 my-2">
                    <input 
                    type="text" 
                    className="w-52 border-black p-1 bg-transparent border rounded-md" 
                    placeholder="username" 
                    onChange={handleUInput}
                    />
                     <input 
                    type="text" 
                    className="w-52 border-black p-1 bg-transparent border rounded-md" 
                    placeholder="password" 
                    onChange={handlePInput}
                    />
                     <input 
                    type="text" 
                    className="w-52 border-black p-1 bg-transparent border rounded-md" 
                    placeholder="Confirm Password" 
                    />
                    <button className="bg-[#FAA200] w-24 p-1 rounded-md" onClick={addUsers}> Sign Up</button>
                    
                    <p>Already have an account Please? <Link to={"/"} className="underline">Login</Link> </p>

                </div>
            </div>

        </div>
    )
}

export default SignUp