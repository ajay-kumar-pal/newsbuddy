import React from 'react'
document.getElementById('root').innerText="hello world gmail.";
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>response.json())
.then((data)=>console.log(data))
.catch((err)=>document.write(err));

export default function Testing() {
  return (
    <div>Testing</div>
  )
}