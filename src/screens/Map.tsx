import React from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import tailwind from 'twrnc';

import MapComponent from '../components/Map';
import Ride from '../components/Ride';

const Map = () => {
  return (
    <KeyboardAvoidingView
      style={tailwind`flex-1`}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={tailwind`h-full`}>
        <View style={tailwind`h-1/2`}>
          <MapComponent />
        </View>
        <View style={tailwind`h-1/2`}>
          <Ride />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Map;
