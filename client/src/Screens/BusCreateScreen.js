import React, {useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';
import  Message  from '../Components/Message';
import  Loader  from '../Components/Loader';
import { addBus } from '../Actions/BusesActions';
import { BUS_CREATE_RESET } from '../Constants/BusConstants';



const BusCreateScreen = () => {
    const userLogin = useSelector(state => state.userLogin);
    const  {userInfo} = userLogin;

    const busAdd = useSelector(state => state.busAdd);
    const {bus,loading,success,error} = busAdd;

    const [name,setName] = useState('');
    const [ticketPrice, setTicketPrice] = useState('');
    const [destination,setDestination] = useState('');
    const [from,setFrom] = useState('');
    const [day,setDay] = useState('');
    const [time,setTime] = useState('');

    const history = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if(success){
            history('/buses');
             dispatch({type: BUS_CREATE_RESET})
        }
    },[dispatch,history,success]);

    const submitHandler = () => {
        dispatch(addBus({
            name:name,
            ticketPrice:ticketPrice,
            destination:destination,
            appoitments: [{
                time:time,
                from:from,
                day:day
            }]

        }))
    }
  return (
    <>
            
    <h1>Add Bus</h1>
    {error && <Message variant='danger'>{error}</Message>}
    {loading && <Loader></Loader>}
    <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
            <Form.Label>bus name</Form.Label>
            <Form.Control type='text' placeholder='Enter name' value={name} onChange={(e) =>setName(e.target.value)}>
            </Form.Control>
        </Form.Group>
        
        <Form.Group controlId='ticketPrice'>
            <Form.Label>Price</Form.Label>
            <Form.Control type='text' placeholder='Enter price' value={ticketPrice} onChange={(e) => setTicketPrice(Number(e.target.value))}>
            </Form.Control>
        </Form.Group>

        <Form.Group controlId='destination'>
            <Form.Label>bus Destination</Form.Label>
            <Form.Control type='text' placeholder='Enter values seperated by - ' value={destination} onChange={(e) => setDestination(e.target.value)}>
            </Form.Control>
        </Form.Group>

        <Row className='py-3'>
            <strong>Add First Bus Appoitment</strong>
        <Col>
        <Form.Control type='text' placeholder="Start Point" value={from} onChange={(e) => {setFrom(e.target.value)}} />
        </Col>
        <Col>
        <Form.Control type='text' placeholder="Time of Trip" value={time} onChange={(e) => {setTime(e.target.value)}} />
        </Col>
        <Col>
        <Form.Select aria-label="choose time" onChange={(e) => {setTime(time.concat(e.target.value))}}>
                              <option value="Am">Am</option>
                              <option value="Pm">Pm</option>
         </Form.Select>
        </Col>
        <Col>
        <Form.Control type='text' placeholder="Day" value={day} onChange={(e) => {setDay(e.target.value)}} />
        </Col>
        <Button type='submit' variant='primary'>
            ADD
        </Button>
    </Row>
    </Form>
    
</>
  )
}

export default BusCreateScreen