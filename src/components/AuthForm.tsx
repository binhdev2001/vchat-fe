import React, { useState } from "react";
import "../assets/style/AuthForm.css";

const AuthForm = (props: any) => {
    const [userName, setUserName] = useState("");
    const handleBtn = () => {
        console.log("User Name: ", userName);
        
    }
    return (
        <form className="login">
            <h2>Welcome {userName} !</h2>
            <p>Please log in</p>
            <input type="text" placeholder="User Name"
            onChange={(event) => {
                setUserName(event.target.value);
                }}
            />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Log In" onClick={(event) => {
                event.preventDefault();
                handleBtn();
            }}/>
            <div className="links">
                <a href="#">Forgot password</a>
                <a href="#">Register</a>
            </div>
        </form>
    )
}

export default AuthForm;


