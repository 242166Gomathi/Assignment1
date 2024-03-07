// useFetchUserData.js
import { useEffect, useReducer } from 'react';
import userData from '../userData.json';

const initialState = {
  data: null,
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        data: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_ERROR':
      return {
        data: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const useFetchUserData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Here, we're using userData from the JSON file
        const data = userData;
        
        // Simulating delay  asynchronous behavior
        setTimeout(() => {
          dispatch({ type: 'FETCH_SUCCESS', payload: data });
        }, 1000);
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      }
    };

    fetchData();
  }, []);

  return state;
};

export default useFetchUserData;
