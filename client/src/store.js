import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { busesListReducer, busWithAppoitmentDetailsReducer } from './Reducers/BusReducers';
import { userLoginReducer, userRegisterReducer } from './Reducers/UserReducers';

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
const intialState = {
    userLogin: {userInfo: userInfoFromStorage}
};
const middleware = [thunk];
const reducer = combineReducers({
    busesList : busesListReducer, 
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    busWithAppoitmentDetails: busWithAppoitmentDetailsReducer
});
const store = createStore(reducer,intialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;
