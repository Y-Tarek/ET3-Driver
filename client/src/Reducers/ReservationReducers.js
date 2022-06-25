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
    RESERVATION_LIST_DETAILS_RESET,
    RESERVATION_APPROVAL_REQUEST,
    RESERVATION_APPROVAL_SUCCESS,
    RESERVATION_APPROVAL_FAIL,
    RESERVATION_APPROVAL_RESET,
    PAYMENT_SUCCESS,
    PAYMENT_REQUEST,
    PAYMENT_FAIL
} from '../Constants/ReservationConstants';

export const reservationCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case RESERVATION_CREATE_REQUEST:
        return {
          loading: true,
        }
      case RESERVATION_CREATE_SUCCESS:
        return {
          loading: false,
          success: true,
          ticket: action.payload,
        }
      case RESERVATION_CREATE_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
      case RESERVATION_CREATE_RESET:
        return {}
      default:
        return state
    }
  }

  export const myTicketsDetailsReducer = (state = {tickets:[]}, action) => {
    switch (action.type) {
      case RESERVATION_DETAILS_REQUEST:
        return {
          loading: true,
        }
      case RESERVATION_DETAILS_SUCCESS:
        return {
          loading: false,
          tickets: action.payload,
        }
      case RESERVATION_DETAILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
      case RESERVATION_DETAILS_RESET:
        return {}
      default:
        return state
    }
  }

  export const reservationListReducer = (state = {resrvations:[]}, action) => {
    switch (action.type) {
      case RESERVATION_LIST_DETAILS_REQUEST:
        return {
          loading: true,
        }
      case RESERVATION_LIST_DETAILS_SUCCESS:
        return {
          loading: false,
          resrvations: action.payload,
        }
      case RESERVATION_LIST_DETAILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        }

        case RESERVATION_LIST_DETAILS_RESET :
          return {resrvations:[]}
      
      default:
        return state
    }
  }


 export const reservationUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case RESERVATION_APPROVAL_REQUEST:
        return {
          loading: true,
        }
      case RESERVATION_APPROVAL_SUCCESS:
        return {
          loading: false,
          success: true
        }
      case RESERVATION_APPROVAL_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
      case RESERVATION_APPROVAL_RESET:
        return {}
      default:
        return state
    }
  }

export const paymentReservationReducer = (state={url:{}},action) => {
  switch (action.type) {
    case PAYMENT_REQUEST:
      return {
        loading: true,
      }
    case PAYMENT_SUCCESS:
      return {
        loading: false,
        success: true,
        url:action.payload
      }
    case PAYMENT_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}


