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
import React, { useEffect } from "react";
import { auth } from "../../firebase";

function Dashboard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const btns = Array.from(document.querySelectorAll(".MuiTab-root"));
    const btnActive = btns.find((btn) => btn.classList.length === 6);
    console.log(btnActive);
  }, [value]);

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
          <Tab icon={<PhonelinkLockOutlined />} label="PLANTAS" />
          <Tab icon={<PhonelinkLockOutlined />} label="MACETAS" />
          <Tab icon={<PersonPinCircleOutlined />} label="COLGANTES" />
        </Tabs>
      </div>

      <div className="uploadContainer">
        <div className="uploadBox">
          <div className="inputsContainer">
            <TextField label="Nombre" variant="outlined" />

            <FormControl fullWidth variant="outlined">
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
