import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    msg:'',
    user:'',
    token: '',
    userRole:'',
    allUsers: [],
    loading:false,
    error:''

}



export const signUpUser = createAsyncThunk('signupuser', async(body)=>{
    const res = await axios.post("http://localhost:8080/api/v1/auth/register", body, {
        headers:{
            'content-Type' : "application/json",
        },
    })
    return res.data;
})

export const signInUser = createAsyncThunk('signinuser', async(body)=>{
    const res = await axios.post("http://localhost:8080/api/v1/auth/authenticate", body, {
        headers:{
            'content-Type' : "application/json",
        },
    })
    return res.data;
    
})

export const verifyUser = createAsyncThunk('verifyuser', async(body)=>{
    const res = await axios.post("http://localhost:8080/api/v1/auth/verify-otp", body, {
        headers:{
            'content-Type' : "application/json",
        },
    })
    return res.data;
})


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addToken: (state,action)=>{
        state.token = localStorage.getItem("token")
    },
    addUser: (state,action)=>{
        state.token = localStorage.getItem("user")
    },
    logout: (state,action)=>{
        state.token = null;
        localStorage.clear();
    }
  },
  extraReducers(builder) {
    builder
      .addCase(signInUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signInUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.token = payload.token; // Assuming the payload is the token
        localStorage.setItem('token', payload.token);
        state.userRole = payload.role;
    })
      .addCase(signInUser.rejected, (state, action) => {
        state.loading = false; // Assuming loading should be set to false when rejected
        state.error = action.error.message; // Update state with error message
      })
      .addCase(signUpUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signUpUser.fulfilled, (state, { payload: { error, msg } }) => {
        state.loading = false; // Assuming loading should be set to false when fulfilled
        state.msg = msg; // Update state with fulfilled payload
        if(error){
            state.error = error;
        } else {
            state.msg = msg;
        }
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false; // Assuming loading should be set to false when rejected
        state.error = action.error.message; // Update state with error message
      });
      
  },
});

export const { addToken,addUser,logout } = authSlice.actions;
export default authSlice.reducer;
