//The user state is initially empty (null), but will get a value later (after login).

import {useState} from 'react'

type AuthUser={
    name:string;
    email:string;
}
export const User=()=>{
    const [user, setUser] = useState<AuthUser |null>(null)
    const handleLogin=()=>{
        setUser({name:'ashok',email:'ashok@gmail.com'})
    }
    const handleLogout=()=>{
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>user name is {user?.name}</div>
            <div>user email is {user?.email}</div>
        </div>
    )
}