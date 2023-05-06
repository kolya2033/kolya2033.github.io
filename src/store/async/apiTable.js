import axios from "axios"
// import { listLoaded } from "../reducers/clientsReducerSlice"
import { createAsyncThunk } from "@reduxjs/toolkit"

// const sasyncListLoaded = () =>  {
//     return async (dispatch) => {
//         const res = await axios.get("https://jsonplaceholder.typicode.com/users")
//         const response = res.data.map((item, i) => ({...item, order: i + 1}))
//         dispatch(listLoaded(response))
//     }
// }

// export default sasyncListLoaded

const asyncListLoaded = createAsyncThunk(
    'clientReducer/fetch',
    async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        const response = res.data.map((item, i) => ({...item, order: i + 1}))
        return response
    }
) 
export default asyncListLoaded