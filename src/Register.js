import React,{useState} from 'react';
import axios from 'axios';
import Login from './Login';

const Register = () => {

  const[formData,setFormData] = useState({
    name:'',
    password:'',
    email:''
  })
const handleChange=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})
}
const handleSubmit = async(e) => {
  e.preventDefault(); // Stop default form submission
  try{
    const res= await axios.post('https://liveapi-z54l.onrender.com/register',formData);
    alert(res.data.message)
  }catch(e) {
console.log(e)
  }

  
  console.log("Form submitted:", formData);
};






  return(
    <div style={{textAlign:'center'}}>
    <h1>Register</h1>
    <form onSubmit={handleSubmit}> 
    <input 
     type="text"
     name='name' 
     placeholder="Username" 
     value={formData.name}
     onChange={handleChange}
     />

    <br></br>
    <br></br>
    <input type='password' 
    name='password' 
    placeholder="Password" 
    value={formData.password}
    onChange={handleChange} />
    <br></br>
    <br></br>
    <input type='email' 
    name='email' 
    placeholder="Email" 
    value={formData.email} 
    onChange={handleChange}/>
    <br></br>
    <br></br>
<button type='submit'>Register</button>

    </form>

    <Login/>
    </div>
  )
}
export default Register;