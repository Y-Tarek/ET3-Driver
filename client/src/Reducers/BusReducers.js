import { 
    LIST_BUSES_FAIL,
    LIST_BUSES_REQUEST,
    LIST_BUSES_SUCCESS,
    BUS_APPOITMENT_DETAIL_FAIL,
    BUS_APPOITMENT_DETAIL_REQUEST,
    BUS_APPOITMENT_DETAIL_SUCCESS
} from "../Constants/BusConstants";

export const  busesListReducer = (state = {buses:[]}, action) => {
    switch(action.type){
      case LIST_BUSES_REQUEST : 
       return {loading: true, buses: []};
  
      case LIST_BUSES_SUCCESS : 
      return {loading: false, buses: action.payload} ;
        
      case LIST_BUSES_FAIL: 
      return {loading: false, buses: []} ;
  
      default:
          return state;
    }
  }
  

  export const busWithAppoitmentDetailsReducer = (state = {bus:{}}, action) => {
    switch(action.type){
        case BUS_APPOITMENT_DETAIL_REQUEST : 
         return {loading: true, bus:{}};
    
        case BUS_APPOITMENT_DETAIL_SUCCESS : 
        return {loading: false, bus: action.payload} ;
          
        case BUS_APPOITMENT_DETAIL_FAIL: 
        return {loading: false, bus:{}} ; 
    
        default:
            return state;
      }
  }