import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import tailwind from 'twrnc';

import { CarsClasses } from '../../../data/mock';
import { selectTravelTimeInfo } from '../../../redux/slices/navSlice';

function RideType() {
  const navigation = useNavigation();
  const [selected, setSelected] = React.useState<typeof CarsClasses[0] | null>(
    null
  );
  const travelTime = useSelector(selectTravelTimeInfo);

  console.log('travelTime', JSON.stringify(travelTime));

  return (
    <SafeAreaView style={tailwind`flex-1 bg-white p-5`}>
      <View
        style={tailwind`relative flex flex-row p-5  items-center justify-center z-50`}
      >
        <TouchableOpacity style={tailwind`absolute left-5`}>
          <Icon
            name="arrow-left"
            type="feather"
            color="black"
            size={30}
            tvParallaxProperties={undefined}
            onPress={() => navigation.navigate('ChooseRide')}
          />
        </TouchableOpacity>
        <Text style={tailwind`text-lg font-bold`}>Select a Ride</Text>
      </View>
      <FlatList
        style={tailwind`mb-10`}
        data={CarsClasses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tailwind`flex-1 px-5 flex-row justify-between items-center border-b border-gray-300 ${
              selected?.id === item.id ? 'bg-gray-200' : ''
            }`}
            onPress={() => setSelected(item)}
          >
            <View style={tailwind` flex-row items-center `}>
              <Image
                source={item.image}
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: 'contain',
                }}
              />
              <View>
                <Text style={tailwind`text-lg font-medium`}>{item.title}</Text>
                <Text style={tailwind`text-sm text-gray-500`}>
                  {travelTime?.duration.text}
                </Text>
              </View>
            </View>
            <View>
              <Text style={tailwind`text-xl font-medium`}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format((travelTime?.duration.value * item.multiplier) / 100)}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={tailwind`absolute bottom-6 left-5 w-[90%] h-14
         m-auto rounded-full bg-black`}
      >
        <Text
          style={tailwind`text-lg  font-medium text-white text-center p-3 px-5`}
        >
          Choose {selected?.title}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default RideType;
