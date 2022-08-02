import React from "react";
import Card from "../components/UI/Card/Card";

import classes from './Articles.module.css';
import {article} from "../constant/database.js";

const Articles = () => {
    return (
        <div className={`${classes.container} py-3`}>
            {
                article.map((item,index)=>{
                    return(
                        <Card author={item.author} title={item.title} img_path={item.img_path} content={item.content} index={index+1}/>
                    )
                })
            }
            
        </div>
    );
};

export default Articles;