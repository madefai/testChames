
import React from 'react';
import './App.css';
import Home from '../src/containers/HomeContainer.js/index';
import Blog from '../src/containers/BlogContainer.js/index';
import List from '../src/containers/ListUserContainer.js/index';
import Register from '../src/containers/RegisterContainer.js/index';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


export const UserContext = React.createContext();
function App() {
  const [user, setUser] = React.useState([]);
  function getIndex(value, arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i].id === value) {
            return i;
        }
    }
    return -1; 
}
  const handleChange=(id,data,datePub)=>{
    const tab=[...user];
    const index=getIndex(id,tab);
     tab[index].status=data.status;
     tab[index].datePub=datePub;
    
     setUser(tab)
  }
  const deletePub=(id)=>{
       setUser(user.filter(item => item.id !== id));
      
  }
  return (
    <UserContext.Provider value={{user,setUser,handleChange,deletePub}}>
       <Router>
          <Routes>
         
              <Route exact path='/' element={<Home />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/list' element={<List />} />
              <Route path='/register' element={<Register />} />
            
          </Routes>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
