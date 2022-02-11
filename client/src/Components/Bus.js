import React from 'react';
import { Container,Table,Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Bus = ({bus}) => {
    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;
    var history = useNavigate()
    const bookHandler = (id) =>{
     if(!userInfo){
        history('/login')
     }else{
        history(`/bus/${id}`)
     }
       
    }
  return (
       
         <Table>
             <thead>
                 <tr>
                     <th>from</th>
                     <th>time</th>
                     <th>day</th>
                 </tr>
             </thead>
             <tbody>
                     {bus.appoitments.map(app => (
                         <tr key={app._id}>
                             <td>{app.from}</td>
                             <td>{app.time}</td>
                             <td>{app.day}</td>
                             <td>
                                 <LinkContainer to={userInfo ? `/reservation/${app._id}` : '/login'}>
                                   <Button variant='danger' className='btn-sm' onClick={bookHandler(bus._id)}>
                                       Book
                                   </Button>
                                 </LinkContainer>
                             </td>
                         </tr>
                     ))}
                 </tbody>
         </Table>

  )
}

export default Bus