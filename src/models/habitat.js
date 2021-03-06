import Axios from "axios";
import { BASE_API_URL, BASE_SPRITE_URL } from "../constants/api";

export default ({
  state: {
    isLoading: false,
    error: undefined,
    results: [],
    next: null,
    prev: null,
    count: 0,
  },
  
  reducers: {
    fetchStart: (state, payload) => ({
      ...state,
      isLoading: true,
      error: undefined,
    }),

    fetchSuccess: (state, payload) => ({
      ...state,
      ...payload,
      results: [...state.results, ...payload.results],
      isLoading: false,
      error: undefined,
    }),

    fetchFailed: (state, payload) => ({
      ...state,
      isLoading: false,
      error: payload.error,
    }),
  },

  effects: (dispatch) => ({
    fetchHabitat: async (payload, state) => {
      dispatch.pokemon.fetchStart();

      let targetUrl = `${BASE_API_URL}/pokemon-habitat`;

      const { id, next, } = payload;
      
      if (id) {
        targetUrl += `/${id}/`;
      } else if (next) {
        targetUrl = next;
      }
      
      try {
        const response = await Axios.get(targetUrl);
        const composedResults = response.data.results.map(result => {
          // extract ID
          const parts = result.url.split('/');
          const id = parts[parts.length - 2];
          return ({ ...result, avatar: `${BASE_SPRITE_URL}/${id}.png`, id, });
        })
        // Dispatch Success
        dispatch.pokemon.fetchSuccess({ ...response.data, results: composedResults});
      } catch (err) {
        dispatch.pokemon.fetchFailed({ error: err });
      }
    }
  })
});