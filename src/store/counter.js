import {createSlice} from "@reduxjs/toolkit";

const initialState= {counter:0,showCounter:true,}
 const counterSlice =createSlice({
		name:"counters",
		initialState,
		reducers:{
			increment(state){
				state.counter++ ;
			},
			decrement(state){
				state.counter-- ;
			},
			 increase(state,action){
			 	state.counter= state.counter + action.payload;
			 },
			 toggle(state){
			 	state.showCounter=!state.showCounter;
			 }
		}
		
	})
 export default counterSlice.reducer;
 export const counterActions =counterSlice.actions;