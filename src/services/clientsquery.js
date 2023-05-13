import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const clientsApi = createApi({
    reducerPath: 'clientApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (build) => ({
        fetchAllClients: build.query({
            query: () => ({
                url: '/users'
            })
        })
    })
})