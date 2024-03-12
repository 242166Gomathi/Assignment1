import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  user: {
    name: 'Gomathi',
    country: 'India',
    gender: 'Female',
    pan: '12345908987',
    education: {
      tenth: { instituteName: 'Chaitra', cgpa: '8' },
      higherSecondary: { instituteName: 'Chaitra', cgpa: '8' },
      graduation: { instituteName: 'SJE', cgpa: '7' },
    },
    certifications: ["Java"],
  },
};
const persistConfig = {
    key: 'roots',
    storage,
  };
  
const rootReducer = (state = initialState, action) => {
    console.log(action.type);
    switch(action.type) {
      case 'ADD_CERTIFICATION':
        console.log(action.payload.certification)
        const updatedCertifications = [...state.user.certifications, action.payload.certification];
        console.log("Updated Certifications:", updatedCertifications);
        return {
          ...state,
          user: {
            ...state.user,
            certifications: updatedCertifications,
          },
        };

      default:
        console.log("inside switch")
        return state;
    }
  };

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);


export default store;
