import React, {useEffect} from 'react';
import { Container,Table,Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { deleteAppoitment } from '../Actions/BusesActions';

const Bus = ({bus}) => {
    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;
    var history = useNavigate()
    var toArray = bus.destination.split("-") ;
    var to = toArray[toArray.length -1];
    const dispatch = useDispatch()

    

    const deleteAppoitmentHandler = (id) => {
      dispatch(deleteAppoitment(id));
    }
   
  return (
       
         <Table>
             <thead>
                 <tr>
                     <th>from</th>
                     <th>TO</th>
                     <th>time</th>
                     <th>day</th>
                 </tr>
             </thead>
             <tbody>
                     {bus.appoitments.map(app => (
                         <tr key={app._id}>
                             <td>{app.from}</td>
                             <td>{to}</td>
                             <td>{app.time}</td>
                             <td>{app.day}</td>
                             {userInfo && !userInfo.isAdmin && (
                                <td>
                                <LinkContainer to={userInfo ? `/reservation/${app._id}` : '/login'}>
                                  <Button variant='danger' className='btn-sm' >
                                      Book
                                  </Button>
                                </LinkContainer>
                            </td>
                             )}

                            {userInfo && userInfo.isAdmin && (
                                <td>
                                <Button variant='danger' className='btn-sm' onClick={() => {deleteAppoitmentHandler(app._id)}} >
                                    DELETE
                                </Button>
                                </td>
                            )}
                             
                         </tr>
                     ))}
                 </tbody>
         </Table>

  )
}

export default Bus