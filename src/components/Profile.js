import { useEffect, useState } from "react";

const Profile = (props) => {
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);
    useEffect(()=>{
    //API Call
    //console.log("useEffect");
    },[count]);
    useEffect(()=>{
        //API Call
        //console.log("useEffect");
        },[count2]);
    //console.log("render");
    return (
        <div>
            <h2>Profile Components</h2>
            <h3>Name:{props.name}</h3>
            <h3>Count: {count}</h3>
            <h3>Count2:{count2}</h3>
            <button  onClick={()=> {
                setCount(1);
                setCount2(1);
            }}>Count</button>
        </div>
    )
}
export default Profile;