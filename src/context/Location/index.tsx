import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';

import LocationContext from './LocationContext';

interface ILocationProviderProps {
  children: React.ReactNode;
}

const LocationProvider = ({ children }: ILocationProviderProps) => {
  const [location, setLocation] = useState<Location.LocationObject | object>(
    {}
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const position = await Location.getCurrentPositionAsync({});
      setLocation(position);
    })();
  }, []);

  if (errorMsg) {
    setLocation({
      coords: {
        latitude: 0,
        longitude: 0,
      },
    });
  }

  return (
    <LocationContext.Provider value={location}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
