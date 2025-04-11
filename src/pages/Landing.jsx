import Header from "../components/Header";
import TodoContainer from "../components/TodoContainer";
import Card from "../components/Card";
import { useLocation } from "react-router-dom"

function Landing() {
  
  const data = useLocation()

  return (
    <div className="bg-black p-16">
       <div className="bg-white p-10 rounded-md">
           <Header username = {data.state.user}/>

          <div className="flex justify-between gap-7 my-5 flex-wrap">
            
            <Card bgcolor={'#8272DA'} title={"23"} subtitle={"Madurai"}/>
            <Card bgcolor={'#FD6663'} title={"April 07"} subtitle={"10:30pm"}/>
            <Card bgcolor={'#FCA201'} title={"Built using"} subtitle={"React"}/>
           </div>


           <TodoContainer />
       </div>
    </div>
  );
}

export default Landing;
