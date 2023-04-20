import axios from "axios"
import { listLoaded } from "../store/reducers/clientsReducerSlice"

const asyncListLoaded = () =>  {
    return async (dispatch) => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        const response = res.data.map((item, i) => ({...item, order: i + 1}))
        dispatch(listLoaded(response))
    }
}

export default asyncListLoaded