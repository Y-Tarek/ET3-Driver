import axios from 'axios';
import { 
    LIST_BUSES_FAIL,
    LIST_BUSES_REQUEST,
    LIST_BUSES_SUCCESS,
    BUS_APPOITMENT_DETAIL_FAIL,
    BUS_APPOITMENT_DETAIL_REQUEST,
    BUS_APPOITMENT_DETAIL_SUCCESS,
    BUS_CREATE_REQUEST,
    BUS_CREATE_SUCCESS,
    BUS_CREATE_FAIL,
    BUS_APPOITMENT_DELETE_REQUEST,
    BUS_APPOITMENT_DELETE_SUCCESS,
    BUS_APPOITMENT_DELETE_FAIL,
    BUS_DETAIL_REQUEST,
    BUS_DETAIL_SUCCESS,
    BUS_DETAIL_FAIL,
    BUS_DELETE_REQUEST,
    BUS_DELETE_SUCCESS,
    BUS_DELETE_FAIL,
    BUS_APPOITMENT_CRAETE_REQUEST,
    BUS_APPOITMENT_CREATE_SUCCESS,
    BUS_APPOITMENT_CREATE_FAIL
} from "../Constants/BusConstants";

export const listBuses = (firstkeyword='',secondkeyword='')=> async (dispatch)=>  {
    try {
        dispatch({type: LIST_BUSES_REQUEST});
        const {data}  = await axios.get(`/api/bus/all?firstkeyword=${firstkeyword}&secondkeyword=${secondkeyword}`);
        
        dispatch({
            type:LIST_BUSES_SUCCESS,
             payload:data
          });
    } catch (error) {
        dispatch({
            type:LIST_BUSES_FAIL,
             payload:error.response 
          });
    }
  }

  export const getBusAppoitmentDetails = (appoitment_id)=> async (dispatch,getState)=>  {
    try {
        dispatch({type: BUS_APPOITMENT_DETAIL_REQUEST});
        const {userLogin: {userInfo}} = getState();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${userInfo.token}`
            }
        }
        const {data}  = await axios.get(`/api/bus/appoitment/${appoitment_id}`,config);
        
        dispatch({
            type:BUS_APPOITMENT_DETAIL_SUCCESS,
             payload:data
          });
    } catch (error) {
        dispatch({
            type:BUS_APPOITMENT_DETAIL_FAIL,
             payload:error.response 
          });
    }
  }

  export const addBus = (busData) => async (dispatch, getState) => {
    try {
      dispatch({
        type: BUS_CREATE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.post(`/api/bus/add`, busData, config)
  
      dispatch({
        type: BUS_CREATE_SUCCESS,
        payload: data, 
      })
    } catch (error) { 
      const message =
        error.response ;
      dispatch({
        type: BUS_CREATE_FAIL,
        payload: message,
      })
    }
  }

  export const addBusAppotment = (id,appoitment) => async (dispatch, getState) => {
    try {
      dispatch({
        type: BUS_APPOITMENT_CRAETE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.post(`/api/bus/${id}`, appoitment, config)
  
      dispatch({
        type: BUS_APPOITMENT_CREATE_SUCCESS,
        payload: data, 
      })
    } catch (error) { 
      const message =
        error.response ;
      dispatch({
        type: BUS_APPOITMENT_CREATE_FAIL,
        payload: message,
      })
    }
  }

  export const deleteAppoitment =  (appoitment_id) => async (dispatch,getState) => {
    try {
        dispatch({
            type:BUS_APPOITMENT_DELETE_REQUEST
        });
        const {userLogin: {userInfo}} = getState();
        const config = {
            headers: {
                Authorization : `Bearer ${userInfo.token}`
            }
        }
         await axios.delete(`/api/bus/appoitment/${appoitment_id}`,config)
  
      dispatch({
          type:BUS_APPOITMENT_DELETE_SUCCESS});

    } catch (error) {
        dispatch({
            type:BUS_APPOITMENT_DELETE_FAIL,
           payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
  }

  export const listBusDetails = (id)=> async (dispatch,getState)=>  {
    try {
        dispatch({type: BUS_DETAIL_REQUEST});
        const {userLogin: {userInfo}} = getState();
        const config = {
            headers: {
                Authorization : `Bearer ${userInfo.token}`
            }
        }
        const {data}  = await axios.get(`/api/bus/${id}`,config);
        
        dispatch({
            type:BUS_DETAIL_SUCCESS,
             payload:data
          });
    } catch (error) {
        dispatch({
            type:BUS_DETAIL_FAIL,
             payload:error.response 
          });
    }
  }


  export const deleteBus =  (id) => async (dispatch,getState) => {
    try {
        dispatch({
            type:BUS_DELETE_REQUEST
        });
        const {userLogin: {userInfo}} = getState();
        const config = {
            headers: {
                Authorization : `Bearer ${userInfo.token}`
            }
        }
         await axios.delete(`/api/bus/${id}`,config)
  
      dispatch({
          type:BUS_DELETE_SUCCESS}); 

    } catch (error) {
        dispatch({
            type:BUS_DELETE_FAIL,
           payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
  }


