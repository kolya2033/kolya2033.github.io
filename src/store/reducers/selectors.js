import { useSelector } from "react-redux";


export const useList = (state => state.list)
export const useClientId = (state=> state.clientId)
export const useClientOrder = (state=> state.clientOrder)