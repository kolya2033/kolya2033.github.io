import { useSelector } from "react-redux";


export const takeList = (state => state.list)
export const takeClientId = (state=> state.clientId)
export const takeClientOrder = (state=> state.clientOrder)