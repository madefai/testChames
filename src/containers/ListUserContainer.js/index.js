import React,{useContext,useState}  from 'react';
import { UserContext } from '../../App';

import { Link } from "react-router-dom";

function List() {
  const { user } = useContext(UserContext);
  
  const[valueStatus,setValueStatus]=useState('');
  const[valueDatePub,setValueDatePub]=useState('');
 
  const afficherStatus=(status,datePub)=>{
    setValueStatus(status)
    setValueDatePub(datePub)
  }
  return (
    <div >
      
      <table>
        <thead>
          <th>nom</th><th>prénom</th><th>status</th>
        </thead>
        <tbody>
        {user.map((item)=>
          <tr><td>{item.value}</td><td>{item.lastName}</td> <td>
            <buton onClick={()=>afficherStatus(item.status, item.datePub)}>status</buton>
            </td></tr>
        )}
        </tbody>
      </table>
       {valueDatePub} {valueStatus}
      <Link to='/blog'>Blog</Link>
    </div>
  );
}

export default List;