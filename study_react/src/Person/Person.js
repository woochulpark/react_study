//src Person/person.js
import React from 'react';
// 부모 component 에서 자식으로 props 전달
//value가 고정값이 아니면 지정으로 defaultValue로 해야 함 
const person = (props) => {
    return ( 
        <div>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>
                {props.children}
                <input type="text" onChange={props.changed} defaultValue={props.name} />
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