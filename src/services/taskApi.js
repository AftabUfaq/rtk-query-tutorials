// src/services/taskApi.js
import {
    createApi,
    fetchBaseQuery
  } from "@reduxjs/toolkit/query/react";
  
  export const taskApi = createApi({
    reducerPath: "tasksApi",
    baseQuery: fetchBaseQuery({
      baseUrl: "http://localhost:5000/"
    }),
    tagTypes: ["Task","User"],
    endpoints: (builder) => ({
      tasks: builder.query({
        query: () => "/tasks",
        providesTags: ["Task"]
      }),
      users: builder.query({
        query: () => "/users",
        providesTags: ["User"]
      }),
      addTask: builder.mutation({
        query: (task) => ({
          url: "/tasks",
          method: "POST",
          body: task
        }),
        invalidatesTags: ["Task"]
      }),
      updateTask: builder.mutation({
        query: ({ id, ...rest }) => ({
          url: `/tasks/${id}`,
          method: "PUT",
          body: rest
        }),
        invalidatesTags: ["Task"]
      }),
      deleteTask: builder.mutation({
        query: (id) => ({
          url: `/tasks/${id}`,
          method: "DELETE"
        }),
        invalidatesTags: ["Task"]
      }),
      addUser: builder.mutation({
        query: (task) => ({
          url: "/users",
          method: "POST",
          body: task
        }),
        invalidatesTags: ["User"]
      }),
      updateUser: builder.mutation({
        query: ({ id, ...rest }) => ({
          url: `/users/${id}`,
          method: "PUT",
          body: rest
        }),
        invalidatesTags: ["User"]
      }),
      deleteUser: builder.mutation({
        query: (id) => ({
          url: `/users/${id}`,
          method: "DELETE"
        }),
        invalidatesTags: ["User"]
      })
    })
  });
  export const {
    useTasksQuery,
    useAddTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation,
    useUsersQuery,
    useAddUserMutation,
    useDeleteUserMutation,
    useUpdateUserMutation
  } = taskApi;