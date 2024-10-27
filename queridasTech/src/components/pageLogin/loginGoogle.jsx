import React from "react";
import iGoogle from "../../assets/iconGoogle.svg";
import './loginColumn.css';

function LoginGoogle() {
    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignSelf: "center",
        gap: "40px"
    };

    const botao = {
        display: "flex",
        gap: "10px",
        textDecoration: "none",
        backgroundColor: "#EEEEEE",
        maxWidth: "400px",
        maxHeight: "50px",
        color: "black",
        textAlign: "center",
        justifyContent: "center",
        borderRadius: "5px",
        alignItems: "center",
        fontFamily: "Montserrat",
        fontSize: "400"
    };

    return (
        <div style={estilo} className="googleButton">
            <h3 style={{ color: "black", fontSize: "28px", textAlign: "center" }}>Entre na sua conta</h3>
            <a href="#" style={botao} className="buttonGoogle">
                <img style={{ width: "15px", height: "55px" }} src={iGoogle} alt="" />
                <p>Login com Google</p>
            </a>
        </div>
    );
}

export default LoginGoogle;
