import {
    RESERVATION_CREATE_FAIL,
    RESERVATION_CREATE_REQUEST,
    RESERVATION_CREATE_SUCCESS,
    RESERVATION_CREATE_RESET,
    RESERVATION_DETAILS_REQUEST,
    RESERVATION_DETAILS_SUCCESS,
    RESERVATION_DETAILS_FAIL,
    RESERVATION_DETAILS_RESET,
    RESERVATION_LIST_DETAILS_REQUEST,
    RESERVATION_LIST_DETAILS_SUCCESS,
    RESERVATION_LIST_DETAILS_FAIL,
    RESERVATION_APPROVAL_REQUEST,
    RESERVATION_APPROVAL_SUCCESS,
    RESERVATION_APPROVAL_FAIL,
    PAYMENT_REQUEST,
    PAYMENT_SUCCESS,
    PAYMENT_FAIL
} from '../Constants/ReservationConstants';
import axios from 'axios';

export const createReservation = (tripDetails) => async (dispatch, getState) => {
    try {
      dispatch({
        type: RESERVATION_CREATE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.post(`/api/reservations`, tripDetails, config)
  
      dispatch({
        type: RESERVATION_CREATE_SUCCESS,
        payload: data, 
      })
    } catch (error) { 
      const message =
        error.response ;
      dispatch({
        type: RESERVATION_CREATE_FAIL,
        payload: message,
      })
    }
  }


  export const getUserTickets = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: RESERVATION_DETAILS_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.get(`/api/reservations/my`, config)
  
      dispatch({
        type: RESERVATION_DETAILS_SUCCESS,
        payload: data,
      })
     
    } catch (error) {
      const message =
        error.response ;
        dispatch({
            type: RESERVATION_DETAILS_FAIL,
            payload: message,
          })
      }
     
    }

    export const listReservations = (number='')=> async (dispatch,getState)=>  {
        try {
            dispatch({type: RESERVATION_LIST_DETAILS_REQUEST});
            const {
                userLogin: { userInfo },
              } = getState()
          
              const config = {
                headers: {
                    'Content-Type': 'application/json',
                  Authorization: `Bearer ${userInfo.token}`,
                },
              }

            const {data}  = await axios.get(`/api/reservations?number=${number}`,config);
            
            dispatch({ 
                type:RESERVATION_LIST_DETAILS_SUCCESS,
                 payload:data
              });
        } catch (error) {
            dispatch({
                type:RESERVATION_LIST_DETAILS_FAIL,
                 payload:error.response 
              });
        }
      }


      export const updateReservationApproval = (id) => async (dispatch,getState) => {
        try {
          dispatch({
            type: RESERVATION_APPROVAL_REQUEST
          })
      
          const {
            userLogin: { userInfo }
          } = getState();
      
          const config = {
            headers: {
                Accept: 'application/json',
              Authorization : `Bearer ${userInfo.token}`
            }
          }
           
            await axios.put(`/api/reservations/${id}`,{}, config); 
       
      
          dispatch({
            type: RESERVATION_APPROVAL_SUCCESS
          })
        } catch (error) {  
          dispatch({
            type: RESERVATION_APPROVAL_FAIL,
            payload:  error.response
          })
        }
      }


  export const payReservation = (paymentDetails) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PAYMENT_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.post(`/api/reservations/create-checkout-session`, paymentDetails, config)
  
      dispatch({
        type: PAYMENT_SUCCESS,
        payload: data, 
      })
    } catch (error) { 
      const message =
        error.response ;
      dispatch({
        type: PAYMENT_FAIL,
        payload: message,
      })
    }
  }
