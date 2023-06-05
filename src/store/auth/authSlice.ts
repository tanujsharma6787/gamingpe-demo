import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {HYDRATE} from 'next-redux-wrapper';

interface AuthState {
    amount: number;
    balance: number;
}

const initialState: AuthState = {
    amount: 0,
    balance: 0,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setAmount(state, action: PayloadAction<number>) {
            state.amount = action.payload;
        },
        setBalance(state, action: PayloadAction<number>) {
            state.balance = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(HYDRATE, (state, action) => {
            // Initialize state with persisted values
            return {
                ...state,
                ...action,
            };
        });
    },
});

export const {setAmount, setBalance} = authSlice.actions;
export default authSlice.reducer;
