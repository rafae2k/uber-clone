import { createContext } from 'react';
import * as Location from 'expo-location';

const LocationContext = createContext({} as Location.LocationObject);

export default LocationContext;
