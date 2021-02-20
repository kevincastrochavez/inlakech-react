import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Tab,
  Tabs,
  TextField,
} from "@material-ui/core";
import {
  PersonPinCircleOutlined,
  PhonelinkLockOutlined,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase";

function Dashboard() {
  const [value, setValue] = useState(0);
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const btns = Array.from(document.querySelectorAll(".MuiTab-root"));
    const btnActive = btns.find((btn) => btn.classList.length === 6);
    setType(btnActive.dataset.type);
  }, [value]);

  const postInfo = (e) => {
    e.preventDefault();

    db.collection(`${type}`).add({
      nombre: name,
      precio: price,
      descripción: description,
    });

    setName("");
    setPrice("");
    setDescription("");
  };

  return (
    <div className="dashboard">
      <div className="typesContainer">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
        >
          <Tab
            icon={<PhonelinkLockOutlined />}
            label="PLANTAS"
            data-type="plantas"
          />
          <Tab
            icon={<PhonelinkLockOutlined />}
            label="MACETAS"
            data-type="macetas"
          />
          <Tab
            icon={<PersonPinCircleOutlined />}
            label="COLGANTES"
            data-type="colgantes"
          />
        </Tabs>
      </div>

      <div className="uploadContainer">
        <div className="uploadBox">
          <div className="inputsContainer">
            <TextField
              label="Nombre"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />

            <FormControl
              fullWidth
              variant="outlined"
              onChange={(e) => setPrice(e.target.value)}
            >
              <InputLabel htmlFor="outlined-adornment-amount">
                Precio
              </InputLabel>
              <OutlinedInput
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                labelWidth={60}
              />
            </FormControl>

            <TextField
              id="outlined-multiline-static"
              label="Descripción"
              multiline
              rows={4}
              variant="outlined"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="uploadImage">
            <img src="https://via.placeholder.com/50x50" alt="" />
          </div>
        </div>
      </div>

      {/* <button onClick={() => auth.signOut()}>Salir</button> */}
    </div>
  );
}

export default Dashboard;
