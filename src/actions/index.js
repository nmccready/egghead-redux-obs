export const SEARCHED_BEERS = 'SEARCHED_BEERS';
export const SEARCHED_BEERS_LOADING = 'SEARCHED_BEERS_LOADING';
export const SEARCHED_BEERS_ERROR = 'SEARCHED_BEERS_ERROR';
export const RECEIVED_BEERS = 'RECEIVED_BEERS';
export const CANCEL_SEARCH = 'CANCEL_SEARCH';
export const NAVIGATE = 'NAVIGATE';

export function searchBeers(query) {
  return {
    type: SEARCHED_BEERS,
    payload: query
  };
}

export function searchBeersLoading(loading) {
  return {
    type: SEARCHED_BEERS_LOADING,
    payload: loading
  };
}

export function searchBeersError(err) {
  return {
    type: SEARCHED_BEERS_ERROR,
    payload: err.message
  };
}

export function receiveBeers(beers) {
  return {
    type: RECEIVED_BEERS,
    payload: beers
  };
}

export function cancelSearch() {
  return { type: CANCEL_SEARCH };
}

export function navigate(url) {
  return { type: NAVIGATE, payload: url };
}
