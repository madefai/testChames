import React,{useRef,useState,useContext}  from 'react';
import { UserContext } from '../../App';
import { Link } from "react-router-dom";
import './RegisterStyle.css';

function Register() {
  const { user, setUser } = useContext(UserContext);
  
  const [count, setCounter] = useState((user.length > 0) ? (user.length + 1) : 1);
  const formEl = useRef();
  const handleSubmit = event => {
    event.preventDefault();
      const formInputs = [...formEl.current.elements].filter(
        element => element.type === "text"
      );
      const newSubmitted = formInputs.reduce(
        (acc, input) => {
          return {
            ...acc,
            [input.name]: input.value,
            id:count
          };
        },
       
      );
      setUser([...user, newSubmitted]);
      setCounter(count+1)
      alert("User ajouter avec succée");
  };
  return (
    <div className="container">
     <form ref={formEl} onSubmit={handleSubmit} className='form' >
       <div className='divFirstName'>
        <label htmlFor="firstName-input" >Nom</label>
        <input id="firstName-input" name="firstName" className='inputName'/>
        </div>
        <div>
        <label htmlFor="lastName-input">Prénom</label>
        <input id="lastName-input" name="lastName" className='inputLastName' />
        </div>
        <button type="submit" className='btn'>Register</button>
      </form>
      <div className='link'>
      <Link to='/List' >List des utilisateur</Link>
      </div>
    </div>
  );
}

export default Register;