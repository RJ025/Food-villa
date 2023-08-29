import { createContext } from "react";

const UserContext = createContext({
    user : {
        name : "dummy" ,
        email : "test@gmail.com"
    }
})

export default UserContext