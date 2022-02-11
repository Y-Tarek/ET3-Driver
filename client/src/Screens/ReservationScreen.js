import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { getBusAppoitmentDetails } from '../Actions/BusesActions';




const ReservationScreen = () => {
    const userLogin = useSelector(state => state.userLogin);
    const  {userInfo} = userLogin;
    const busWithAppoitmentDetails = useSelector(state => state.busWithAppoitmentDetails)
    const {bus,loading,error} = busWithAppoitmentDetails;
    const dispatch = useDispatch();
    const params = useParams();
    var id = params.id;
useEffect(() => {
    // dispatch(getBusAppoitmentDetails(id));
    if(!bus.name ||  bus._id !== id){
        dispatch(getBusAppoitmentDetails(id)); 
    }
 console.log(bus);  
},[dispatch,id]) 
  return ( 
    <div>{bus.name}</div>  
  )  
}
  
export default ReservationScreen 