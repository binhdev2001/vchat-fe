import React, { useState } from "react";
import "../assets/style/AuthForm.css";

const AuthForm = (props:any) => {
    return (
        <form className="login">
            <h2>Welcome to {props.name} !</h2>
            <p>Please log in</p>
            <input type="text" placeholder="User Name" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Log In" />
            <div className="links">
                <a href="#">Forgot password</a>
                <a href="#">Register</a>
            </div>
        </form>
    )
}

export default AuthForm;


