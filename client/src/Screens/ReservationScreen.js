import React,{useEffect,useState} from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { getBusAppoitmentDetails } from '../Actions/BusesActions';
import { Table,Row,Button,Form } from 'react-bootstrap';
import Loader  from '../Components/Loader';
import Message from '../Components/Message';
import { LinkContainer } from 'react-router-bootstrap';
 import { createReservation } from '../Actions/ReservationActions';
import { RESERVATION_CREATE_RESET } from '../Constants/ReservationConstants';





const ReservationScreen = () => {
    const userLogin = useSelector(state => state.userLogin);
    const  {userInfo} = userLogin;
    const busWithAppoitmentDetails = useSelector(state => state.busWithAppoitmentDetails)
    const {bus,loading,error} = busWithAppoitmentDetails;
    const reservationCreate = useSelector(state => state.reservationCreate);
    const {ticket,loading:loadingReservation,error:errorReservation, success:successCreate} = reservationCreate;

    const dispatch = useDispatch();
    const params = useParams();
    const history = useNavigate();
    var id = params.id;
    const [totalPrice,setTotalPrice] = useState(1);
useEffect(() => {
  if(successCreate){
    history('/tickets');
    dispatch({type:RESERVATION_CREATE_RESET})
  }
    // dispatch(getBusAppoitmentDetails(id));
    if( bus._id !== id){
        dispatch(getBusAppoitmentDetails(id)); 
        
    }
   
},[dispatch,history,id,successCreate]) 

const createHandler = () => {
 var tripDetails:{};
  dispatch(createReservation({
    
     tripDetails:{
       bus:bus.busId,
      name:bus.name,
      price:totalPrice,
      from:bus.appoitment.from,
      day:bus.appoitment.day,
      time:bus.appoitment.time
    },
    number:Math.floor(Math.random() * 1000) +1
    
  }));
  
}
  return ( 
    <>  
    {/* <div>{bus.name}</div>    */}
     {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
        <Row>
           <h3>{bus.name}</h3>
             <h4>{bus.destination}</h4>
             <h5>{bus.ticketPrice} EGP</h5>
             <Table>
             <thead>
                 <tr>
                     <th>from</th>
                     <th>time</th>
                     <th>day</th>
                     <th>Number of Seats</th>
                 </tr>
             </thead>
             <tbody>
                         <tr key={bus.appoitment._id}>
                             <td>{bus.appoitment.from}</td>
                             <td>{bus.appoitment.time}</td>
                             <td>{bus.appoitment.day}</td>
                             <td>
                             <Form.Select aria-label="choose number" onChange={(e) => {setTotalPrice(bus.ticketPrice * Number(e.target.value))}}>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </Form.Select>
                             </td>
                            
                         </tr>
                     
                 </tbody>
             </Table>
             
                <Button variant='danger' className='btn-sm' onClick={createHandler}>
                    Confirm
                </Button>
             
        </Row>
      )}
      </>

  )  
}
  
export default ReservationScreen 