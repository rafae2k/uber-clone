import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  View,
} from 'react-native';
import { MAPS_API_KEY } from 'react-native-dotenv';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {
  KeyboardAwareFlatList,
  KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';
import tailwind from 'twrnc';

import NavOptions from '../components/NavOptions';
import { setDestination, setOrigin } from '../redux/slices/navSlice';

const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tailwind`w-full h-full bg-white`}>
      <KeyboardAvoidingView
        style={tailwind`flex-1`}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 300 : -0}
      >
        <View style={tailwind`p-5`}>
          <Image
            style={{ width: 100, height: 100, resizeMode: 'contain' }}
            source={require('../../assets/images/logo.png')}
          />

          <NavOptions />
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            minLength={2}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            query={{ key: MAPS_API_KEY }}
            fetchDetails
            enablePoweredByContainer={false}
            styles={{ container: { flex: 0 }, textInput: { fontSize: 18 } }}
            onPress={(data, details = null) => {
              dispatch(
                setOrigin({
                  location: details?.geometry.location,
                  description: data.description,
                })
              );
              dispatch(setDestination(null));
              navigation.navigate('Map');
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Home;
