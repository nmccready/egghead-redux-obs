export default (action$) =>
  action$.ofType('FETCH_USER').map((action) => ({
    type: 'FETCH_USER_FULFILLED',
    payload: {
      name: 'Shane',
      user: action.payload
    }
  }));
