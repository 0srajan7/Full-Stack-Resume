import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/authSlice'

export const store=configureStore({
    reducer:{
        auth:authReducer
    }
})

// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './features/authSlice';

// const store = configureStore({
//   reducer: {
//     auth: authReducer,   // ✅ make sure this matches your selector
//   },
// });
