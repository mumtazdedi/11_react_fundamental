import React from "react";
import styles from './style.module.css';

const Index = (props) => {
    return (
        <div className="py-4 d-inline-block mx-2" >
            {props.item.completed ? <p className="border border-grey rounded-pill p-1 px-4">{props.item.title}</p> : <s className="border border-grey rounded-pill p-1 px-4">{props.item.title}</s>}
        </div>
    );
}

export default Index;
