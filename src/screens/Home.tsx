import React from 'react';
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import tailwind from 'twrnc';

import NavOptions from '../components/NavOptions';
import SearchInputAutocomplete from '../components/SearchInputAutocomplete';
import { RecentRides } from '../data/mock';

const Home = () => {
  return (
    <SafeAreaView style={tailwind`w-full h-full bg-white`}>
      <View style={tailwind`flex-1`}>
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
            <SearchInputAutocomplete
              iconName="search"
              placeholder="Where to?"
              type="origin"
            />
          </View>
        </KeyboardAvoidingView>
      </View>
      <View>
        <FlatList
          style={tailwind`px-5`}
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
    </SafeAreaView>
  );
};

export default Home;
