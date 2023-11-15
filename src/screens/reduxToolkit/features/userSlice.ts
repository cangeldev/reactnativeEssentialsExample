import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface UserState {
    userInfo: {
        name: string,
        surname: string
    }
}

const initialState: UserState = {
    userInfo: {
        name: "",
        surname: ""
    }
}

export const userSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        addName: (state, action: PayloadAction<string>) => {
            state.userInfo.name = action.payload
        },
        addSurname: (state, action: PayloadAction<string>) => {
            state.userInfo.surname = action.payload
        }
    }
})

export const { addName, addSurname } = userSlice.actions
export default userSlice.reducer