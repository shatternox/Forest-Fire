import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import ModalCustom from "../components/UI/Modal/Modal";

import { donationApiUrl } from "../constant/api";
import classes from "./Donation.module.css";

const Donation = () => {
  const [donationVal, setDonationVal] = useState("");

  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const sendRequest = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ donationVal: donationVal }),
    };
    const res = await fetch(donationApiUrl(), requestOptions);
    let jsonResult = null
    try {
      jsonResult = await res.json();

      setShow(true)
      setMessage(jsonResult.status);

      setDonationVal("");
    } catch (e) {

      setMessage(e.message);
      setShow(true);
  
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    sendRequest();
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <div className={classes.container}>
        <img src="/assets/pictures/donasi.gif" className={classes.cartman} />

        <h1 className={classes.heading}>
          Orang utan akan berterima kasih pada anda.
        </h1>

        <InputGroup className="mb-3 w-50">
          <Form.Control
            type="number"
            placeholder="Enter donation amount"
            value={donationVal}
            onChange={(e) => {
              setDonationVal(e.target.value);
            }}
          />
        </InputGroup>

        <Button
          variant="dark"
          type="submit"
          className={classes.button}
          onClick={submitHandler}
        >
          Donate
        </Button>
      </div>
      <ModalCustom isShow={show} handleClose={handleClose} message={message} />
    </>
  );
};

export default Donation;
