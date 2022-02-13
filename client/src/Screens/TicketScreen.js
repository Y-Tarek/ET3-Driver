import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Table, Row, Col} from 'react-bootstrap';
import  Message  from '../Components/Message';
import  Loader  from '../Components/Loader';
import { getUserTickets } from '../Actions/ReservationActions';

const TicketScreen = () => {
    const userLogin = useSelector(state => state.userLogin);
    const  {userInfo} = userLogin;

    const myTicketsDetails = useSelector(state => state.myTicketsDetails)
    const {tickets,loading,error} = myTicketsDetails;

    const dispatch = useDispatch();
    const history = useNavigate();

    useEffect(() => {
         if(userInfo){
          dispatch(getUserTickets());
         }else{
              history('/')
         }
             
         
         
    },[dispatch])

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