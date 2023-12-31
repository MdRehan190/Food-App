import {useContext} from "react";
import UserContext from "../utils/UserContext.js";
const Footer = () => {
   const {user} = useContext(UserContext);
    return(
    <h4 className="p-10 m-10">
     This site is developed by {user.name} - {user.email}
    </h4>
    )
 }
 //<i class="fa-solid fa-heart"></i>
 export default Footer;