import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { listBuses } from '../Actions/BusesActions';
import Bus from '../Components/Bus';
import Loader  from '../Components/Loader';
import Message from '../Components/Message'

const BusesScreen = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const busesList = useSelector(state => state.busesList);
    const {buses,loading,error} = busesList;
    useEffect(() => {
       dispatch(listBuses());
       console.log(buses);
    },[dispatch])
  return (
      <>
        <h1>Buses</h1>
        {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
            <Row>
             {buses.map(bus => (
                 <>
             <h3>{bus.name}</h3>
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