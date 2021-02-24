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
import firebase from "firebase";
import { auth, db, storage } from "../../firebase";

function Dashboard() {
  // Just a comment
  const [value, setValue] = useState(0);
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const btns = Array.from(document.querySelectorAll(".MuiTab-root"));
    const btnActive = btns.find((btn) => btn.classList.length === 6);
    setType(btnActive.dataset.type);
  }, [value]);

  const handleChangeFile = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const postInfo = (e) => {
    e.preventDefault();

    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);

            db.collection(`${type}`).add({
              nombre: name,
              precio: price,
              descripción: description,
              imageUrl: url,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });

            setImage(null);
            setProgress(0);
          });
      }
    );
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
            data-type="Plantas"
          />
          <Tab
            icon={<PhonelinkLockOutlined />}
            label="MACETAS"
            data-type="Macetas"
          />
          <Tab
            icon={<PersonPinCircleOutlined />}
            label="COLGANTES"
            data-type="Colgantes"
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

          <div className="uploadContainerInfo">
            <div className="uploadImage">
              <input
                className="imageupload__select"
                type="file"
                onChange={handleChangeFile}
              />

              <progress value={progress} max="100" />
            </div>

            <button onClick={postInfo}>Enviar</button>
          </div>
        </div>
      </div>

      {/* <button onClick={() => auth.signOut()}>Salir</button> */}
    </div>
  );
}

export default Dashboard;
