import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// Trying to learn RTk Query 
export const adminApi = createApi({
    reducerPath: 'admin',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
    endpoints: (builder) => ({
      getAccounts: builder.query({
        query: () => 'accounts',
      }),
    }),
  })
  
  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
  export const { useGetAccountsQuery } = adminApi