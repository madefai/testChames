import React,{useState} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './CardStyle.css';

function Card(props) {
    const [valueComment,setValueComment]=useState('');
    var date =  new Date().toLocaleString();
    function handleChange(e){
        setValueComment(e.target.value);
    };
  return (
    <div style={{marginLeft:"100px"}} >
      <Container className='containerBlg' >
        <Row>
          <Col>{props?.datePub}</Col>
          <Col>{props?.firstName} {props?.userID}</Col>
          <Col></Col><Col></Col><Col><button style={{visibility:props.valueSelected ? 'visible' :'hidden'}} onClick={()=>props.deletePub(props.id)} >delete</button></Col>
        </Row>
        <Row>
          <Col>{props?.pub}</Col>
          
        </Row> 
        <Row>
          <Col><input type="text" value={valueComment} onChange={handleChange}/></Col>
          
        </Row> 
        <Row>
          <Col></Col><Col></Col><Col><button onClick={()=>props.setVal(props.id,{status:valueComment},date)} >Publish</button></Col>
          
        </Row> 
      </Container>
    </div>
  );
}

export default Card;