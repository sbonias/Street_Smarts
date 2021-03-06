import React, { createContext, useReducer } from 'react';
import LocationReducer from './LocationReducer';
import LocationsAPI from '../../utils/LocationsAPI';

const initialState = {
  locations: [],
  currentLocation: [],
  selected: false,
  newLocation: false,
  pinned: false,
  pinnedStatus: '',
  activeLocation: '',
};

export const LocationGlobalContext = createContext(initialState);
export const LocationsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LocationReducer, initialState);

  const loadLocations = async () => {
    try {
      const locations = await LocationsAPI.loadLocations();
      dispatch({
        type: 'LOAD_LOCATIONS',
        payload: locations.data,
      });
    } catch (err) {
      console.error(err + 'load locations fail');
    }
  };

  const setActive = async (id) => {
    try {
      const activeLocal = await LocationsAPI.putLocation(id);
    } catch (err) {
      console.error(err, 'set active');
    }
  };

  const postLocation = async (location) => {
    try {
      const newLocation = await LocationsAPI.postLocation(location);
      // .then(() => {
      //   loadLocations();
      // });
    } catch (err) {
      console.error(err, 'hello???');
    }
  };

  const setCurrentLocation = async (location) => {
    try {
      dispatch({
        type: 'SET_CURRENT_LOCATION',
        payload: location,
      });
    } catch (err) {
      console.error(err, 'set current location');
    }
  };

  const chooseSaved = async () => {
    try {
      dispatch({
        type: 'CHOOSED_SAVED',
      });
    } catch (err) {
      console.error(err, 'choose saved');
    }
  };

  const chooseCurrentLocation = async () => {
    try {
      dispatch({
        type: 'CHOOSE_CURRENT_LOCATION',
      });
    } catch (err) {
      console.error(err, 'choose current location');
    }
  };

  const backPinLocation = async () => {
    try {
      dispatch({
        type: 'CHOOSE_BACK',
      });
    } catch (err) {
      console.error(err, 'choose back');
    }
  };

  const pinnedStatusCheck = async () => {
    try {
      const pinned = await LocationsAPI.findActive();
      if (pinned.data.length > 0) {
        dispatch({
          type: 'PINNED_STATUS',
          payload: { pinnedStatus: true, activeLocation: pinned.data },
        });
      } else {
        dispatch({
          type: 'PINNED_STATUS',
          payload: { pinnedStatus: false, activeLocation: '' },
        });
      }
    } catch (err) {
      console.error(err, 'pinned status');
    }
  };

  const togglePin = async () => {
    try {
      dispatch({
        type: 'TOGGLE_PIN',
      });
    } catch (err) {
      console.error(err, 'toggle Pin');
    }
  };

  const resetPin = async () => {
    try {
      dispatch({
        type: 'RESET_PIN',
      });
    } catch (err) {
      console.error(err, 'reset pin');
    }
  };

  return (
    <LocationGlobalContext.Provider
      value={{
        loadLocations,
        locations: state.locations,
        setCurrentLocation,
        currentLocation: state.currentLocation,
        selected: state.selected,
        newLocation: state.newLocation,
        chooseSaved,
        chooseCurrentLocation,
        backPinLocation,
        pinned: state.pinned,
        togglePin,
        pinButton: state.pinButton,
        postLocation,
        setActive,
        resetPin,
        pinnedStatus: state.pinnedStatus,
        pinnedStatusCheck,
        activeLocation: state.activeLocation,
      }}
    >
      {children}
    </LocationGlobalContext.Provider>
  );
};
