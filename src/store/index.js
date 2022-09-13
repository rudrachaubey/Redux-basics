//import {createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./auth"
import counterReducer from "./counter"


/* const counterReducer=(state=initialState,action)=>{
	if(action.type==="increment"){
		return{
			counter:state.counter+1,
			showCounter:state.showCounter
		} 
	}
	if(action.type==="decrement"){
		return {

			counter:state.counter-1,
			showCounter:state.showCounter
		}
	}
	if(action.type==="increase"){
		return {

			counter:state.counter + action.amount,
			showCounter:state.showCounter
		}
	}
	if(action.type==="toggle"){
		return{
			counter:state.counter,
			showCounter:!state.showCounter
		}
	}
	return state;
}*/
const store = configureStore({
    reducer:{count:counterReducer,auth:authReducer}
});

export default store;