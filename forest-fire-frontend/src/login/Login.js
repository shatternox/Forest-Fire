import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ModalCustom from "../components/UI/Modal/Modal";

import classes from "./Login.module.css";
import { loginApiUrl } from "../constant/api";

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("")
  
  const sendRequest = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email , password: password}),
    };
    try{
      const res = await fetch(loginApiUrl(), requestOptions);
      const jsonResult = await res.json();

      // alert(jsonResult.status);
      setShow(true)
      setMessage(jsonResult.status)
      setPassword("")
      setEmail("")


    } catch(e){
      console.log(e)
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // console.log(email);
    // console.log(password);

    sendRequest();
  }

  const handleClose = () => {
    setShow(false)
  }


  return (
    <div className={`${classes.form} p-3 mt-5 w-25 mx-auto`}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => {
            setEmail(e.target.value);
          }}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => {
            setPassword(e.target.value);
          }}/>
        </Form.Group>
        <Button variant="dark" type="submit" onClick={submitHandler}>
          Submit
        </Button>
      </Form>
      <ModalCustom isShow={show} handleClose={handleClose} message={message}/>
    </div>
  );
};

export default Login;
