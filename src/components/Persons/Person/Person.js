/**
 * Import
 * */

import React from 'react';
import classes from "./Person.css";

const person = (props) => { //props - standaard in React
    return (
        <div className={classes.Person} >
            <p onClick={props.click}> {/*DIT IS EEN FUNCTIE DIE VANUIT APP.JS WORDT MEEGEGEVEN*/}
                Hi, my name is {props.name} and i'm {props.age} years old,
                {props.children}
            </p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );

};

/**
 * Export
 * */
export default person;