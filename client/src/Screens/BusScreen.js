import React, {useEffect,useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { listBusDetails, deleteBus, addBusAppotment } from '../Actions/BusesActions';
import Loader from '../Components/Loader';
import Message from '../Components/Message';
import { Row, Col, Table, Form,Button } from 'react-bootstrap';
import Bus from '../Components/Bus';


const BusScreen = () => {
    const userLogin = useSelector(state => state.userLogin);
    const  {userInfo} = userLogin;

    const busDetail = useSelector(state => state.busDetail);
    const {bus,loading,error} = busDetail;

    const busDelete = useSelector(state => state.busDelete);
    const {loading:loadingDelete,success,error:errorDelete} = busDelete;

    const busAppoitmentAdd = useSelector(state => state.busAppoitmentAdd);
    const {appoitment,loading:loadingAppAdd,error:errorAppAdd} = busAppoitmentAdd

    const [from,setFrom] = useState('');
    const [day,setDay] = useState('');
    const [time,setTime] = useState('');
    const dispatch = useDispatch();
    const params = useParams();
    const id = params.id;
    const history = useNavigate();

    useEffect(() => {   
         
            dispatch(listBusDetails(id))
        
          
    },[dispatch,id]);

    const deleteHandler = (id) => {
       dispatch(deleteBus(id));
       history('/buses')
    }

    const addAppoitmentHandler = (id) => {
        dispatch(addBusAppotment(id,{
            time:time,
            from:from,
            day:day
        }));
        history('/buses')
    }
  return ( 
    <>
    {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message>:(
        <>
       <Row>
           <Col> 
             <h3>{bus.name}</h3>
             <h4>{bus.destination}</h4> 
          </Col>
          <Col>
          <Button type='submit' variant='danger' onClick={() => {deleteHandler(bus._id)}}>
                DELETE
            </Button>
          </Col>

       </Row>
       
       <Form onSubmit={() =>{addAppoitmentHandler(bus._id)}}>
        <Row className='py-3'>
                <strong>Add  Bus Appoitment</strong>
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
    ) }
</>
  )
}

export default BusScreen