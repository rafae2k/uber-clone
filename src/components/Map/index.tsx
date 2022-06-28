import React, { useContext, useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { MAPS_API_KEY } from 'react-native-dotenv';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useDispatch, useSelector } from 'react-redux';

import LocationContext from '../../context/Location/LocationContext';
import {
  selectDestination,
  selectOrigin,
  setOrigin,
  setTravelTimeInfo,
} from '../../redux/slices/navSlice';

function Map() {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef<MapView>(null);
  const location = useContext(LocationContext);
  const dispatch = useDispatch();

  if (!origin && location) {
    dispatch(
      setOrigin({
        location: {
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        },
      })
    );
  }

  useEffect(() => {
    if (!origin || !destination) return;
    mapRef.current?.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) return;

    const getTravelTime = () => {
      const resp = fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${origin.description}&destinations=${destination.description}&key=${MAPS_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch(setTravelTimeInfo(data.rows[0].elements[0]));
        });
    };

    getTravelTime();
  }, [origin, destination]);

  if (origin) {
    return (
      <MapView
        ref={mapRef}
        style={styles.map}
        mapType="mutedStandard"
        initialRegion={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        }}
      >
        {origin && destination && (
          <MapViewDirections
            origin={origin.description}
            destination={destination.description}
            strokeColor="black"
            strokeWidth={3}
            apikey={MAPS_API_KEY}
          />
        )}

        {origin?.location && (
          <Marker
            title={origin.description}
            coordinate={{
              latitude: origin.location.lat,
              longitude: origin.location.lng,
            }}
            identifier="origin"
          />
        )}

        {destination?.location && (
          <Marker
            title={destination.description}
            coordinate={{
              latitude: destination.location.lat,
              longitude: destination.location.lng,
            }}
            identifier="destination"
          />
        )}
      </MapView>
    );
  }

  return <View style={styles.map} />;
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default Map;
