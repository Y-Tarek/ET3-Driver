import React, {useState,useEffect} from 'react';
import { Row,Col,Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Message from '../Components/Message';



const HomeScreen = () => {
  const [from,setFrom] = useState('');
  const [to, setTo] = useState('');

  

  const dispatch = useDispatch();
  const history = useNavigate();
  

  
  

  const twowaySearchHandler = () => {
    if(from == '' && to == ''){
      history('/');
    }
    else{
      history(`/search/${from}/${to}`);
    }
    
  }
  return (
    <Row>
      <h1>Our Mission</h1>
       <h5>You can check our buses destinations routes and times, searcj for your destination and see if our buses can serve you and if you want to book a a ride just sign in or if you dont have an account create one and book your trip. </h5>
       <h6>You want to go from a place to a place just search for that</h6>
       <Form onSubmit={twowaySearchHandler}>
         <Row>
          <Col>
            <Form.Control type='text' placeholder="From" value={from} onChange={(e) => {setFrom(e.target.value)}} />
          </Col>
          <Col>
            <Form.Control type='text' placeholder="To" value={to} onChange={(e) => {setTo(e.target.value)}} />
          </Col>
          
          <Button type='submit' variant='link' >
                    Search  
          </Button>
          </Row>
        </Form>
        

    </Row>
  )
}

export default HomeScreen