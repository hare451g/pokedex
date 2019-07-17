import Axios from "axios";
import { BASE_API_URL } from "../constants/api";

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
    fetchPokemon: async (payload, state) => {
      dispatch.pokemon.fetchStart();

      let targetUrl = `${BASE_API_URL}/pokemon`;

      const { id, next, } = payload;
      
      if (id) {
        targetUrl += `/${id}/`;
      } else if (next) {
        targetUrl = next;
      }
      
      try {
        const response = await Axios.get(targetUrl);
        dispatch.pokemon.fetchSuccess(response.data);
      } catch (err) {
        dispatch.pokemon.fetchFailed({ error: err });
      }

    }
  })
});