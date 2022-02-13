import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { listBuses } from '../Actions/BusesActions';
import Bus from '../Components/Bus';
import { LinkContainer } from 'react-router-bootstrap';
import Loader  from '../Components/Loader';
import Message from '../Components/Message'

const BusesScreen = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const busesList = useSelector(state => state.busesList);
    const {buses,loading,error} = busesList;

    const appoimentDelete = useSelector(state => state.appoimentDelete);
    const {loading:loadingAppDelete,success,error:errorAppDelete} = appoimentDelete;
    const busDelete = useSelector(state => state.busDelete);
    const {loading:loadingDelete,success:successDelete,error:errorDelete} = busDelete;
    const busAdd = useSelector(state => state.busAdd);
    const {bus,loadingBus,successBus,errorBus} = busAdd;

    const busAppoitmentAdd = useSelector(state => state.busAppoitmentAdd);
    const {appoitment,loading:loadingAppAdd,error:errorAppAdd,success:suucessAppAdd} = busAppoitmentAdd;

    useEffect(() => {
      if(success){
        dispatch(listBuses());
      }
       dispatch(listBuses());
    },[dispatch,success,successDelete,successBus,suucessAppAdd])
  return (
      <>
        <h1>Buses</h1>
        {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
            <Row>
             {buses.map(bus => (
                 <>
              <LinkContainer to={`/bus/${bus._id}`}>
              <h3>{bus.name}</h3>
              </LinkContainer>
             <h4>{bus.destination}</h4>
             <h5>{bus.ticketPrice} EGP</h5>
             <Bus bus={bus}></Bus>
             </>
          ))};
            </Row>
        )}
        

    </>
  )
}

export default BusesScreen