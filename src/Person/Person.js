import React from 'react';

const person = (props) =>{
//return <p>I am {props.name} with age {Math.floor(Math.random() * 20)}</p>
return (
<div>
<p>I am {props.name} with age {props.age}</p>
<p>{props.children}</p>
</div>
)
}

export default person;