// store.js
import { createStore } from 'redux';

const initialState = {
  name: 'Gomathi',
  country: 'INDIA',
  gender: 'Female',
  panNumber: 'ABCDE1234F',
  tenth: {
    instituteName: 'Chaitra',
    cgpa: 8
  },
  higherSecondary: {
    instituteName: 'Chaitra',
    cgpa: 8
  },
  graduation: {
    instituteName: 'JSS',
    cgpa: 8
  },
  certifications: ['React Certified', 'AWS Certified']
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CERTIFICATION':
      return {
        ...state,
        certifications: [...state.certifications, action.payload]
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;