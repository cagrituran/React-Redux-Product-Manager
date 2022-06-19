//import { useNavigate } from "react-router-dom";

//const navigate = useNavigate()
export const control = () => {
    const stUser = sessionStorage.getItem("user")
    if(stUser){
        return stUser;
    }
    
}