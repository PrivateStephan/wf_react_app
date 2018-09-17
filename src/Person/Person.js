/**
 * Import
 * */

import React from 'react';

const person = (props) => { //props - standaard in React
    return (
        <div>
            <p>
                Hi, my name is {props.name} and i'm {props.age} old,
            </p>
            <p>
                {props.children}
            </p>
        </div>
    );

};

/**
 * Export
 * */
export default person;