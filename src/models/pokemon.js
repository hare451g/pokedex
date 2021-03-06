import Axios from "axios";
import { BASE_API_URL, BASE_SPRITE_URL } from "../constants/api";

export default ({
  state: {
    isLoading: false,
    error: undefined,
    results: [],
    details: undefined,
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

    fetchDetailSuccess: (state, payload) => ({
      ...state,
      isLoading: false,
      error: undefined,
      selected:  {...payload },
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
      
      let targetUrl = `${BASE_API_URL}`;

      let { id, next, filterType, slug } = payload;
      if (filterType) {
        targetUrl += `/${filterType}/${slug}`
      }
      
      if (next) {
        filterType = 'pokemon-species';
        targetUrl = next;
      }
      
      try {
        const response = await Axios.get(targetUrl);

        const resultKey = filterType === 'pokemon-species'
          ? 'results'
          : 'pokemon_species'

        const composedResults = response.data[resultKey].map(result => {
          // extract ID
          const parts = result.url.split('/');
          const id = parts[parts.length - 2];
          return ({ ...result, avatar: `${BASE_SPRITE_URL}/${id}.png`, id, });
        })
        // Dispatch Success
        dispatch.pokemon.fetchSuccess({ ...response.data, results: composedResults});
      } catch (err) {
        console.error(err)
        dispatch.pokemon.fetchFailed({ error: `${err}` });
      }
    },

    fetchPokemonDetails: async (payload, state) => {
      dispatch.pokemon.fetchStart();
      try {
        const { slug } = payload;
        
        let targetUrl = `${BASE_API_URL}`;
        
        targetUrl += `/pokemon/${slug}`
        
        const response = await Axios.get(targetUrl);
        
        // Dispatch Success
        dispatch.pokemon.fetchDetailSuccess({ ...response.data});
      } catch (err) {
        console.error(err)
        dispatch.pokemon.fetchFailed({ error: `${err}` });
      }
    }
  })
});