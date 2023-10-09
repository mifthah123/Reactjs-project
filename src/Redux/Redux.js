import {createSlice} from '@reduxjs/toolkit'

const user = createSlice({
    name:'users',
    initialState:{
        infoUser:[]
    },
    reducers:{
        reduxFunction:(state,action)=>{
            console.log(' *******************',action);
            state.infoUser.push(action.payload)
        },
        removeData:(state)=>{
            state.infoUser=[]
        }
        
    },
    

})

export const {reduxFunction,removeData}=user.actions
export default user.reducer