import api from "../../store/api";

/*
TODO: Define the following 4 endpoints:
  1. getPuppies (query)
  2. getPuppy (query)
  3. addPuppy (mutation)
  4. deletePuppy (mutation)

The query endpoints should provide the "Puppy" tag.
The mutation endpoints should invalidate the "Puppy" tag.

(Optional) TODO: Write `transformResponse` and `transformErrorResponse`
functions for each endpoint.
*/

const puppyApi = api.injectEndpoints({
  endpoints: (build) => ({

        getPuppies: build.query({
          query: () => "players",
          providesTags: ["Puppy"],
          transformResponse: (response) => response.data.players,
          transformErrorResponse: (error) => error.data?.error || "An error occurred"
        }),

        getPuppy: build.query({
          query: (id) => `players/${id}`,
          providesTags: (result, error, id) => [{ type: "Puppy", id }],
          transformResponse: (response) => response.data.player,
          transformErrorResponse: (error) => error.data?.error || "An error occurred"
        }),

        // Mutation endpoints
        addPuppy: build.mutation({
          query: (puppy) => ({
            url: "players",
            method: "POST",
            body: { player: puppy }
          }),
          invalidatesTags: ["Puppy"],
          transformResponse: (response) => response.data.player,
          transformErrorResponse: (error) => error.data?.error || "Failed to add puppy"
        }),

        deletePuppy: build.mutation({
          query: (id) => ({
            url: `players/${id}`,
            method: "DELETE"
          }),
          invalidatesTags: ["Puppy"],
          transformResponse: (response) => response.data,
          transformErrorResponse: (error) => error.data?.error || "Failed to delete puppy"
        })


  }),
});

export const {
  useGetPuppiesQuery,
  useGetPuppyQuery,
  useAddPuppyMutation,
  useDeletePuppyMutation,
} = puppyApi;
