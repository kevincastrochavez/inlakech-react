import { Button, TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
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
        <TextField
          label="Correo"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          size="large"
          endIcon={<SendIcon />}
          onClick={login}
        >
          Entrar
        </Button>
      </form>
    </div>
  );
}

export default Login;
