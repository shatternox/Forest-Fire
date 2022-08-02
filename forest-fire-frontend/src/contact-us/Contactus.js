import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ModalCustom from "../components/UI/Modal/Modal";

import {ticketApiUrl} from '../constant/api'
import classes from "./Contactus.module.css";


const Contactus = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [concern, setConcern] = useState("");

  const [show, setShow] = useState(false);
  const [message,setMessage] = useState("");
  
  const sendRequest = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, email: email, phone: phone, concern:concern}),
    };

    try{
      const res = await fetch(ticketApiUrl(), requestOptions);
      const jsonResult = await res.json();

      
      setShow(true)
      setMessage(jsonResult.status);

    } catch(e){
      console.log(e)
    }

  };

  const submitHandler = (event) => {
    event.preventDefault();
    sendRequest();
  }

  const handleClose = () => {
    setShow(false)
  }


  return (
    <>
      <Form className={`${classes.form} p-3 mt-5 w-25 mx-auto`}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => {
            setName(e.target.value);
          }}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => {
            setEmail(e.target.value);
          }}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Enter phone number" value={phone} onChange={(e) => {
            const pattern = new RegExp('^[0-9]*$');
            pattern.test(e.target.value) 
            &&
            setPhone(e.target.value);
          }}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Concern</Form.Label>
          <Form.Control as="textarea" value={concern} onChange={(e) => {
            setConcern(e.target.value);
          }}/>
        </Form.Group>
        <Button variant="dark" type="submit" onClick={submitHandler}>
          Submit
        </Button>
      </Form>
      <ModalCustom isShow={show} handleClose={handleClose} message={message}/>
    </>
  );
};
export default Contactus;
