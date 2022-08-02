import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { article } from "../constant/database.js";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import classes from "./Article.module.css";
import Button from "react-bootstrap/Button";

const Article = (props) => {
  let [comment, setComment] = useState("");
  let [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [searchParams] = useSearchParams();
  const articleIndex = searchParams.get("id");
  const showArticle = !isNaN(articleIndex) && articleIndex - 1 < article.length;

  const submitHandler = (event) => {
    event.preventDefault();

    addUserHandler();
  };

  const addUserHandler = () => {
    setUsers((prevUsers) => {
      const newUsername = [
        ...prevUsers,
        { id: Math.random(), username: username, comment: comment },
      ];
      setComment("");
      setUsername("");
      return newUsername;
    });
  };

  return (
    <>
      {showArticle ? (
        <div className={`${classes.container} py-5`}>
          <div className="w-75 mx-auto">
            <div>
              <h1>{article[articleIndex - 1].title}</h1>
              <p>Author: {article[articleIndex - 1].author}</p>
            </div>
            <div>
              <img
                src={article[articleIndex - 1].img_path}
                className="w-50 h-50"
              />
              <p className="mt-3">{article[articleIndex - 1].content}</p>
            </div>
            <hr />
            <div className={classes.comment}>
              {users.map((item) => {
                return (
                    <>
                        <div className="d-flex">
                            <img src="/assets/pictures/profilepic.jpg" className={classes.profilepic}/>
                            <div>
                                <h3>{item.username}</h3>
                                <p>{item.comment}</p>
                            </div>
                        </div>
                        <hr/>
                    </>
                );
              })}

              <h2>Comment</h2>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">😊</InputGroup.Text>
                <Form.Control
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </InputGroup>
              <InputGroup>
                <InputGroup.Text>Comment</InputGroup.Text>
                <Form.Control
                  as="textarea"
                  value={comment}
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                />
              </InputGroup>
              <br />
              <Button
                variant="dark"
                style={{ float: "right" }}
                type="submit"
                onClick={submitHandler}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className={classes.no_article}>
          <p>No Article Found</p>
          <img
            src="/assets/pictures/orangutan-driving.gif"
            className={classes.img}
          />
        </div>
      )}
    </>
  );
};

export default Article;
