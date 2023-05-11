import { createSelector } from "@reduxjs/toolkit"


const selectlist = (state) => state.list
const selectClientId = (state) => state.clientId
const selectClientOrder = (state) => state.clientOrder

export const takeList = createSelector(selectlist,  (list) => list)
export const takeClientId = createSelector(selectClientId, (clientId) => clientId)
export const takeClientOrder = createSelector(selectClientOrder, (clientOrder) => clientOrder)
