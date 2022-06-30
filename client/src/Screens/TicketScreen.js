import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Table, Row, Col, Button} from 'react-bootstrap';
import  Message  from '../Components/Message';
import  Loader  from '../Components/Loader';
import { getUserTickets, payReservation } from '../Actions/ReservationActions';

const TicketScreen = () => {
    const userLogin = useSelector(state => state.userLogin);
    const  {userInfo} = userLogin;

    const myTicketsDetails = useSelector(state => state.myTicketsDetails)
    const {tickets,loading,error} = myTicketsDetails;

    const paymentCreate = useSelector(state => state.paymentCreate)
    const {url,loading:loadingPayment,error:errorPayment, success:successPayment} = paymentCreate


    const dispatch = useDispatch();
    const history = useNavigate();

    useEffect(() => {
         if(userInfo){
          dispatch(getUserTickets());
         }else{
              history('/')
         }
             
         if(successPayment){
          console.log(url);
          window.open(url['url'])
        } 
        if(errorPayment){
          console.log(errorPayment.message); 
        }
         
    },[dispatch,successPayment])

    const paymentHandler = (totalPrice,name) => {
      var paymentDetails = {"amount":totalPrice,"name":name}    
       dispatch(payReservation(paymentDetails))
      // console.log(paymentDetails);
    }

  return (
      <>
    <h1>MY TICKETS</h1>
    {loading ? <Loader/> : error ? <Message variant='danger' >{error}</Message>: (
        <>
          <Table striped bordered hover responsive className='table-sm'>
          <thead>
                     <tr>
                         <th>BUS</th>
                         <th>PRICE</th>
                         <th>DAY</th>
                         <th>TIME</th>
                         <th>FROM</th>
                         <th>NUMBER</th>
                         <th>STATUS</th>
                         <th>Payment Status</th>
                     </tr>
                 </thead>
                 <tbody>
                     {tickets.length == 0 ? <Message variant={'primary'}>No Tickets found</Message> : (
                         <>
                          {tickets.map(ticket => (
                            <tr>
                                <td>{ticket.tripDetails.name}</td>
                                <td>{ticket.tripDetails.price}</td>
                                <td>{ticket.tripDetails.day}</td>
                                <td>{ticket.tripDetails.time}</td>
                                <td>{ticket.tripDetails.from}</td>
                                <td>{ticket.number}</td>
                                <td>{ticket.isApproaved ?(<p>approaved</p>)  : (<p>pending</p>)}</td>
                                <td><Button variant='danger' onClick={() => {paymentHandler(ticket.tripDetails.price,ticket.tripDetails.name)}} >Pay Online</Button></td>
                            </tr>
                          ))}
                          </>
                     )}
                     
                 </tbody>
          </Table>
        </>
    )}
    </>
     
  )
}

export default TicketScreen