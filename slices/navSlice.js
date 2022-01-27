import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    origin: { location: { lat: 0, lng: 0 }, description: ''},
    destination: { location: { lat: 0, lng: 0 }, description: ''},
    tripInfo: null,
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload
        },
        setDestination: (state, action) => {
            state.destination = action.payload
        },
        setTripInfo: (state, action) => {
            state.tripInfo = action.payload
        }
    }
})

export const { setOrigin, setDestination, setTripInfo } = navSlice.actions


// Selectors

export const selectOrigin = (state) => state.nav.origin
export const selectDestination = (state) => state.nav.destination
export const selectTripInfo = (state) => state.nav.tripInfo

export default navSlice.reducer