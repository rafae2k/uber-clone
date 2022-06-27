import React, { ReactNode, useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { MAPS_API_KEY } from 'react-native-dotenv';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useSelector } from 'react-redux';

import { selectDestination, selectOrigin } from '../../redux/slices/navSlice';

interface MapProps {
  children: ReactNode;
}

function Map() {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    console.log('useEffect');
    if (!origin || !destination) return;
    mapRef.current?.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);

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

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default Map;
