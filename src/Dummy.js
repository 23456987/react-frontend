import React from 'react'

export const Dummy = () => {

    let local = localStorage.getItem("username");
    
    console.log(local); // JohnDoe
    let user = sessionStorage.getItem("username");
console.log(user); // JohnDoe
//sessionStorage.removeItem("username");
  return (
    <div>Dummy</div>
  )
}
export default Dummy;