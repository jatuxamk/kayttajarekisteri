import { configureStore } from '@reduxjs/toolkit';
import kayttajatReducer from './kayttajatSlice'; 

export const store = configureStore({
    reducer : {
        kayttajat : kayttajatReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;