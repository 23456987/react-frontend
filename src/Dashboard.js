import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
const navigate = useNavigate();
    const [users, setUser] = useState({}); // Create state to store user data
    const fetchProfile = async () => {
        try {
          const token = localStorage.getItem("token"); 
          console.log(token)// Get stored token
          if (!token) {
            alert("Access denied. Please log in.");
            navigate("/login"); // Redirect to login if no token
            return;
          }
    
          const res = await axios.get("http://localhost:5000/profile", {
           headers: { Authorization: `Bearer ${token}` }, // Send token in headers
          });
          setUser(res.data); // Set user data
          alert(res.data.message);
        } catch (error) {
          console.log(error.response?.data || "Error fetching profile");
        }
      };
    
      useEffect(() => {
        fetchProfile(); // Call function when component loads
      }, []);
    
  return (
    <div style={{textAlign:'center'}}>
    <h2>Dashboard</h2>
    
    <button onClick={fetchProfile}>Fetch Data</button>
   
    </div>
  )
}
export default Dashboard;