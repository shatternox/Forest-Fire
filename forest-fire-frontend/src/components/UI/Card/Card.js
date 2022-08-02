import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
    const {title, author, img_path, content,index} = props
    const first10 = content.split(' ').slice(0, 10).join(' ');
    return (
        <div className={classes.card + " mx-5 my-3 py-3"}>
            <div className={"d-flex px-3 justify-content-center"}>
                <div className={classes.text_side}>
                    <h2 className={classes.h2}><a href={`/article?id=${index}`} className={`${classes.a} text-decoration-none text-colour`}>{title}</a></h2>
                    <p><a href="" className={`${classes.a} text-decoration-none text-colour`}>{first10 + ' ...'}</a></p>
                    <p>Author: {author}</p>
                </div>
                <div className={`${classes.img_side} ms-2`}>
                    <img src={img_path} className="mw-100 mh-100"/>
                </div>
            </div>
        </div>
    );
}

export default Card;









