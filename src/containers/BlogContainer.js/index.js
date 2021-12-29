import React,{useContext,useEffect,useState}  from 'react';
import { UserContext } from '../../App';
import Card from '../../components/Card/Card';
import SignUp from '../RegisterContainer.js/index';

function Blog() {
  const { user,setUser,handleChange,deletePub } = useContext(UserContext);
  const[valueSelected,setValueSelected]=useState('');
  useEffect(() => {
    setUser(user)
  },[user]);
  const selectUser=(e)=>{
    setValueSelected(e.target.value)
  }
  return (
    <div >
      {user?.length > 0 ?<div>
        <select name="user" id="user" onChange={selectUser} value={valueSelected}>
      
        {user.map((item)=>
          <option value={item.id}>{item.value}-{item.lastName}</option>
        )}
      </select>
      {user?.map((item)=><Card datePub={item?.datePub} userID={item?.id} valueSelected={valueSelected == item.id} 
      firstName={item?.value} lastName={item?.lastName} pub={item?.status} 
      setVal={(id,data,datePub)=>handleChange(item.id,data,datePub)} deletePub={(id)=>deletePub(item.id)}/>
      
      )}
      
      </div>:<SignUp />}
      
       
     
    </div>
  );
}

export default Blog;