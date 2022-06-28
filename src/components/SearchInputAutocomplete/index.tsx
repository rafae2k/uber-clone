import { useNavigation } from '@react-navigation/native';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import React from 'react';
import { MAPS_API_KEY } from 'react-native-dotenv';
import { Icon } from 'react-native-elements';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import tailwind from 'twrnc';

import { setDestination, setOrigin } from '../../redux/slices/navSlice';

interface SearchInputAutocompleteProps {
  iconName: string;
  placeholder: string;
  type: 'origin' | 'destination';
}

function SearchInputAutocomplete({
  iconName,
  placeholder,
  type,
}: SearchInputAutocompleteProps) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  let handleType: ActionCreatorWithPayload<any, string>;

  if (type === 'origin') handleType = setOrigin;

  if (type === 'destination') handleType = setDestination;

  return (
    <GooglePlacesAutocomplete
      placeholder={placeholder}
      minLength={2}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
      query={{ key: MAPS_API_KEY }}
      fetchDetails
      enablePoweredByContainer={false}
      keyboardShouldPersistTaps="handled"
      styles={{
        container: {
          marginTop: 10,
          flex: 0,
        },
        textInputContainer: {
          padding: 4,
          backgroundColor: 'rgb(209,213,219)',
          borderRadius: 999,
        },
        textInput: {
          margin: 5,
          backgroundColor: 'rgba(0,0,0,0)',
          color: 'black',
        },
      }}
      renderLeftButton={() => (
        <Icon
          name={iconName}
          type="feather"
          size={24}
          color="gray"
          tvParallaxProperties={undefined}
          style={tailwind`p-2 rounded-full ml-2 mt-2 `}
        />
      )}
      onPress={(data, details = null) => {
        dispatch(
          handleType({
            location: details?.geometry.location,
            description: data.description,
          })
        );
        if (type === 'origin') {
          dispatch(setDestination(null));
        }
        navigation.navigate('Map');

        if (type === 'destination') {
          navigation.navigate('ChooseRideType');
        }
      }}
    />
  );
}

export default SearchInputAutocomplete;
