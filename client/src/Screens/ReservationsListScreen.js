import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Table,Button } from 'react-bootstrap';
import { listReservations,updateReservationApproval } from '../Actions/ReservationActions';
import Loader from '../Components/Loader';
import Message from '../Components/Message';



const ReservationsListScreen = () => {
    const userLogin = useSelector(state => state.userLogin);
    const  {userInfo} = userLogin;
    const reservationList = useSelector(state => state.reservationList);
    const {resrvations,loading,error} = reservationList;
    const  reservationUpdate = useSelector(state => state.reservationUpdate);
    const {loading:loadingApprove, error:errorApprove, success} =  reservationUpdate;

    const dispatch = useDispatch();
    const params = useParams();
    var number = params.number;
    

    const refuseHandler = () =>{
        console.log("approve"); 
    }
    useEffect(() => {
       dispatch(listReservations(number))
    },[dispatch,number,success,userInfo]);
    const approveHandler = (id) =>{
        if(window.confirm("Are you sure")){
            dispatch(updateReservationApproval(id))
            
        } 
    }

  return ( 
      <>
    <h1>Reservations</h1>
    {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
        <>
          
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
                         <th> </th>
                     </tr>
                 </thead>
                 <tbody>
                     {resrvations.length == 0 ? <Message variant={'primary'}>No Tickets found</Message> : (
                         <>
                          {resrvations.map(ticket => (
                            <tr>
                                <td>{ticket.tripDetails.name}</td>
                                <td>{ticket.tripDetails.price}</td>
                                <td>{ticket.tripDetails.day}</td>
                                <td>{ticket.tripDetails.time}</td>
                                <td>{ticket.tripDetails.from}</td>
                                <td>{ticket.number}</td>
                                <td>{ticket.isApproaved ?(<p>approaved</p>)  : (<p>pending</p>)}</td>
                                {!ticket.isApproaved && (
                                     <td>
                                   <Button variant='primary' className='btn-sm' onClick={() =>{approveHandler(ticket._id)}}>
                                       Accept
                                   </Button>

                                   <Button variant='danger' className='btn-sm' onClick={refuseHandler}>
                                       Decline
                                   </Button>
                                </td> 
                                ) }
                               
                            </tr>
                          ))}
                          </>
                     )}
                    
                 </tbody>
                     </Table>
              </>
         
        </>
    )}
    </>
  )
}

export default ReservationsListScreen