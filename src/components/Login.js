import React, { useState, Component } from 'react';

export const Login = () => {
    //below is a react hook
const [count, setCount] = useState(0);

  return (
    <div>this is the login</div>
  )
}


export default Login;



// const Form=()=>
//     {
//       const[change, setChange] = useState(true);
//         return (
//             <div>
//                 <button onClick={()=> setChange(!change)}>
//                   Click here
//                 </button>
//                 {change ? (<h1>welcome</h1>) : (<h1>a computer science</h1>)}
//             </div>
//         );
//     }


