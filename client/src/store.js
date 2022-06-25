import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { appoimentDeleteReducer, busAddReducer, busAppoitmentAddReducer, busDeleteReducer, busDetailReducer, busesListReducer, busWithAppoitmentDetailsReducer } from './Reducers/BusReducers';
import { userLoginReducer, userRegisterReducer } from './Reducers/UserReducers';
import { myTicketsDetailsReducer, reservationCreateReducer, reservationListReducer, reservationUpdateReducer, paymentReservationReducer } from './Reducers/ReservationReducers';

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
const intialState = {
    userLogin: {userInfo: userInfoFromStorage}
};
const middleware = [thunk];
const reducer = combineReducers({
    busesList : busesListReducer,  
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    busWithAppoitmentDetails: busWithAppoitmentDetailsReducer,
   reservationCreate:reservationCreateReducer,
   myTicketsDetails:myTicketsDetailsReducer, 
   reservationList:reservationListReducer,
   reservationUpdate:reservationUpdateReducer,
   busAdd:busAddReducer,
   appoimentDelete:appoimentDeleteReducer,
   busDetail:busDetailReducer,
   busDelete:busDeleteReducer, 
   busAppoitmentAdd:busAppoitmentAddReducer,
   paymentCreate:paymentReservationReducer
});
const store = createStore(reducer,intialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;
 