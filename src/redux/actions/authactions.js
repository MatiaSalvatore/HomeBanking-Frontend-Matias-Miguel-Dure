import { createAction } from "@reduxjs/toolkit";

const current = createAction('CURRENT', (data)=>{
    
    const dataFixed ={
        name: data.firstName+' '+ data.lastName,
        email: data.email
    }
    return {
        payload: {
            ...dataFixed,
            loggedIn:true
        }
    }
})

const login = createAction('LOGIN', (token)=>{
    localStorage.setItem('token', token)
    return {
        payload: {
            token,
            timestamps: Date.now()
        }
    }
})

const actions = {
    login,
    current
}

export default  actions;