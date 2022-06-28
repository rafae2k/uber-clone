import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import tailwind from 'twrnc';
import { RecentRides } from '../../../data/mock';

import SearchInputAutocomplete from '../../SearchInputAutocomplete';

function ChooseRide() {
  const navigation = useNavigation();
  return (
    <View style={tailwind`flex-1 bg-white p-5`}>
      <View
        style={tailwind`flex self-center w-7 h-1 bg-gray-200 rounded-full`}
      />
      <Text style={tailwind`text-center py-3 text-xl font-bold`}>
        Good Morning, Rafo!
      </Text>
      <View>
        <KeyboardAvoidingView
          style={tailwind``}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 300 : -0}
        >
          <SearchInputAutocomplete
            iconName="search"
            placeholder="Where to?"
            type="destination"
          />
        </KeyboardAvoidingView>
      </View>
      <View>
        <FlatList
          data={RecentRides}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={tailwind`flex flex-row items-center mt-2`}>
              <View style={tailwind`-ml-3`}>
                <Icon
                  name="clock"
                  type="feather"
                  color="gray"
                  size={30}
                  tvParallaxProperties={undefined}
                  style={tailwind`p-2 rounded-full ml-2 mt-2 `}
                />
              </View>
              <View style={tailwind`flex-1 border-b-2 border-gray-100 p-2`}>
                <Text style={tailwind`text-base font-bold`}>{item.title}</Text>
                <Text style={tailwind`text-sm text-gray-500`}>
                  {item.address}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      {/* <View style={tailwind`flex`}>
        <TouchableOpacity
          style={tailwind`flex flex-row h-14 w-full items-center justify-center rounded-full bg-black`}
          onPress={() => navigation.navigate('ChooseRideType')}
        >
          <Icon
            name="directions-car"
            type="material"
            color="white"
            size={20}
            tvParallaxProperties={undefined}
          />
          <Text
            style={tailwind`text-center text-white text-lg font-medium ml-3`}
          >
            Ride
          </Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

export default ChooseRide;
