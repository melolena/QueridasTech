import React from "react";
import LoginGoogle from "./loginGoogle";
import LoginForm from "./LoginForm";
import './loginColumn.css'

function LoginColumn (){
    return (
        <div className="loginColumn">
            <h2>QueridasTech</h2>
            <LoginGoogle/>
            <div class="divider">
                <span>Ou</span>
            </div>
            <LoginForm/>
            <a href="#">Cadastre-se</a>
        </div>
    )
}
export default LoginColumn;