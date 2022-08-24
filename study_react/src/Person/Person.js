//src Person/person.js
import React from 'react';
// 부모 component 에서 자식으로 props 전달

const person = (props) => {
    return ( 
        <div>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>
                {props.children}
            </p>
        </div>    
    );
}

// 동적 content 
/*
const person = () =>{
    return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
}
*/
// 단일 정적 commponent
/*


const person = () => {
    return <p>I'm a Person!</p>
}
*/
export default person;