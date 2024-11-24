import { useReducer, useEffect } from 'react';

const initialState = {
  rate: null,
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { rate: action.payload, loading: false, error: null };
    case 'FETCH_ERROR':
      return { rate: null, loading: false, error: action.payload };
    case 'FETCH_INIT':
      return { ...state, loading: true, error: null };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const useBitcoinRate = (currency) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {

    const fetchBitcoinRate = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const response = await fetch(
          `https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch Bitcoin rates');
        }
        const data = await response.json();
        dispatch({ type: 'FETCH_SUCCESS', payload: data.bpi[currency].rate_float });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      }
    };

    fetchBitcoinRate();
  }, [currency]);

  return state;
};

export default useBitcoinRate;
