import React,{useEffect,useState}from 'react'
import { Link } from 'react-router-dom'
import styles  from'./my-sass.scss';

   function Users() {
    const[users,setUsers]=useState([]);
    const[count,setCount]=useState(0);
    
    
    
    const sortedUsers = users.sort(function (a, b) {
      if (a.count==undefined || b.count==undefined ) {
        a.count=0;
        b.count=0;
      }
    
      return b.count -a.count;
    });
    
    const updateVote = (selected)=>{sortedUsers.map(user =>{

      if(user.id == selected){
        
  
        user.count==undefined?user.count=1:user.count++;
        setCount(user.count);
      
       
      } 

    })
  
  }


    
 useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then ((res)=>res.json())
      .then ((data)=>setUsers(data));

 },[]);

     return (
       
       <div  className='center'>
 
      <div className='card'>
        <ul>
   
         {sortedUsers.map((user)=>(
           <li key={user.id} >
            <Link to={`${user.id}`} >{user.name}</Link>
            <button onClick={() => updateVote(user.id)} >Vote {user.count} </button>
            </li> 
         ))}
         </ul>
         </div>
       </div>
     )
   }
   
   export default Users;

