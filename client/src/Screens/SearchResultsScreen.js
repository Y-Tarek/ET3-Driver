import React, {useEffect} from 'react';
import {Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { listBuses } from '../Actions/BusesActions';
import Bus from '../Components/Bus';
import Loader from '../Components/Loader';
import Message from '../Components/Message';

const SearchResultsScreen = () => {
  const busesList = useSelector(state => state.busesList);
  const {buses,loading,error} = busesList;
  const dispatch = useDispatch();
  const params = useParams();
  var firstkeyword = params.firstkeyword;
  var secondkeyword = params.secondkeyword;

  useEffect(() => {
    dispatch(listBuses(firstkeyword,secondkeyword))
    console.log(buses);
   },[dispatch,firstkeyword,secondkeyword])

  return (
   <>
       {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message>:(
          <Row>
              {buses.length === 0 ? 
              <Message variant='primary'>No Buses Avialable</Message> :
              <> 
              {buses.map(bus => (
                <>
                <h3>{bus.name}</h3>
                <h4>{bus.destination}</h4>
                <h5>{bus.ticketPrice} EGP</h5>
                <Bus bus={bus}></Bus>
                </>
           ))}
           </>

            }
              
          </Row>
       ) }
   </>
  )
}

export default SearchResultsScreen