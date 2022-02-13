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
    BUS_CREATE_RESET,
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
    BUS_APPOITMENT_CREATE_FAIL,
    BUS_APPOITMENT_CREATE_RESET
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
  

  export const busWithAppoitmentDetailsReducer = (state = {loading:true,bus:{}}, action) => {
    switch(action.type){
        case BUS_APPOITMENT_DETAIL_REQUEST : 
         return {loading: true};
    
        case BUS_APPOITMENT_DETAIL_SUCCESS : 
        return {loading: false, bus: action.payload} ;
          
        case BUS_APPOITMENT_DETAIL_FAIL: 
        return {loading: false, error:action.payload} ; 
    
        default:
            return state;
      }
  }

  export const busAddReducer = (state = {}, action) => {
    switch (action.type) {
      case BUS_CREATE_REQUEST:
        return {
          loading: true,
        }
      case BUS_CREATE_SUCCESS:
        return {
          loading: false,
          success: true,
          bus: action.payload,
        }
      case BUS_CREATE_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
      case BUS_CREATE_RESET:
        return {}
      default:
        return state
    }
  }

  export const  appoimentDeleteReducer = (state = {}, action) => {
    switch(action.type){
      case BUS_APPOITMENT_DELETE_REQUEST : 
       return {loading: true};
  
      case BUS_APPOITMENT_DELETE_SUCCESS : 
      return {loading: false, success:true} ;
        
      case BUS_APPOITMENT_DELETE_FAIL: 
      return {loading: false, error: action.payload} ;
  
      default:
          return state;
    }
  }

  export const  busDetailReducer = (state = {bus:{}}, action) => {
    switch(action.type){
      case BUS_DETAIL_REQUEST : 
       return {loading: true,  ...state};
  
      case BUS_DETAIL_SUCCESS : 
      return {loading: false, bus: action.payload} ;
        
      case BUS_DETAIL_FAIL: 
      return {loading: false, bus: action.payload} ;
  
      default:
          return state;
    }
  }


  export const  busDeleteReducer = (state = {}, action) => {
    switch(action.type){
      case BUS_DELETE_REQUEST : 
       return {loading: true};
  
      case BUS_DELETE_SUCCESS : 
      return {loading: false, success:true} ;
        
      case BUS_DELETE_FAIL: 
      return {loading: false, error: action.payload} ;
  
      default:
          return state;
    }
  }

  export const busAppoitmentAddReducer = (state = {}, action) => {
    switch (action.type) {
      case BUS_APPOITMENT_CRAETE_REQUEST:
        return {
          loading: true,
        }
      case BUS_APPOITMENT_CREATE_SUCCESS:
        return {
          loading: false,
          success: true,
          appoitment: action.payload,
        }
      case BUS_APPOITMENT_CREATE_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
      case BUS_APPOITMENT_CREATE_RESET:
        return {}
      default:
        return state
    }
  }