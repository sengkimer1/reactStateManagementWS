import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    name: string;
}

const initialUserState: UserState = {
    name: "kimer"
};

const userSlice = createSlice({
    name: "user",
    initialState: initialUserState,
    reducers: {
        setUser: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
    },
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer; 
