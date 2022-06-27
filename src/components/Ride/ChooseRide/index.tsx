import { useNavigation } from '@react-navigation/native';
import { ReactNode, useEffect, useRef } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { MAPS_API_KEY } from 'react-native-dotenv';
import {
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef,
} from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import tailwind from 'twrnc';
import { setDestination } from '../../../redux/slices/navSlice';

interface ChooseRideProps {
  children: ReactNode;
}

function ChooseRide() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const AutoCompleteRef = useRef<GooglePlacesAutocompleteRef>(null);

  useEffect(() => {
    if (!AutoCompleteRef.current) return;
    AutoCompleteRef.current.blur();
  }, []);

  return (
    <View style={tailwind`flex-1 bg-white`}>
      <Text style={tailwind`text-center py-5 text-xl font-bold`}>
        Good Morning, Rafo!
      </Text>
      <View>
        <GooglePlacesAutocomplete
          ref={AutoCompleteRef}
          styles={styles}
          placeholder="Where to?"
          minLength={2}
          debounce={400}
          nearbyPlacesAPI="GooglePlacesSearch"
          query={{ key: MAPS_API_KEY }}
          fetchDetails
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            dispatch(
              setDestination({
                location: details?.geometry.location,
                description: data.description,
              })
            );
            navigation.navigate('ChooseRideType');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 20,
    flex: 0,
  },
  textInput: {
    fontSize: 18,
    backgroundColor: '#dddddf',
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});

export default ChooseRide;
