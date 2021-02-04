import React from "react";
import { useState } from "react";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <form>
        <input
          placeholder="Correo"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
        ></input>
        <input
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button onClick={login}>Entrar</button>
      </form>
    </div>
  );
}

export default Login;
