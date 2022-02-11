import axios from 'axios';
import { 
    LIST_BUSES_FAIL,
    LIST_BUSES_REQUEST,
    LIST_BUSES_SUCCESS,
    BUS_APPOITMENT_DETAIL_FAIL,
    BUS_APPOITMENT_DETAIL_REQUEST,
    BUS_APPOITMENT_DETAIL_SUCCESS
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

