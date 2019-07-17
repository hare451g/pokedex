import { init } from "@rematch/core";
import * as models from '../index';

const mockResponse = {
  results: [],
  count: 1,
  next: 'lorem',
  prev: 'ipsum',
};
const mockError = 'Something went wrong . . .';

describe('Pokemon states tests', () => {
  it('Should load pokemon states', () => {
    const store = init({ models });

    expect(store.getState().pokemon).toEqual({
      isLoading: false,
      error: undefined,
      results: [],
      next: null,
      prev: null,
      count: 0,
    });
  });
});

describe('Pokemon reducers tests', () => {
  it('fetchStart() should set loading to true, and error to undefined',
  () => {
    const store = init({ models });
    store.dispatch.pokemon.fetchStart({});
    const state = store.getState().pokemon;
    expect(store.getState().pokemon).toEqual({
      ...state,
      isLoading: true,
      error: undefined,
    });
  });

  it(`fetchSuccess() should set loading to false,
      and error to undefined, also fill results and paginations`,
  () => {
    const store = init({ models });
    store.dispatch.pokemon.fetchSuccess(mockResponse);
    const state = store.getState().pokemon;
    expect(store.getState().pokemon).toEqual({
      ...state,
      ...mockResponse,
      results: [...state.results, ...mockResponse.results],
      isLoading: false,
      error: undefined,
    });
  });


  it(`fetchFailed() should set loading to false,
      and error to error info`,
  () => {
    const store = init({ models });
    const state = store.getState().pokemon;
    store.dispatch.pokemon.fetchFailed({ error: mockError });
    expect(store.getState().pokemon).toEqual({
      ...state,
      isLoading: false,
      error: mockError,
    });
  });
});
