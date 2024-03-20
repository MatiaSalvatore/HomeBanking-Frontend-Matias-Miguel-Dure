import { createReducer } from "@reduxjs/toolkit";
import authActions from '../../redux/actions/authactions'
const  {login,current} = authActions

const initialState = {
    user:{
        name: '',
        email:'',
        loggedIn: null
    },
    //token: null,
    timestamps: null
}

const authReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(login,(state,action)=>{
            return{
                ...state,
                timestamps: action.payload.timestamps
            }
        })
        .addCase(current,(state,action)=>{
            return{
                ...state,
                user: action.payload
            }
        })
})

export default authReducer;