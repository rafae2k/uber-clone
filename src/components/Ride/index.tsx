import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ReactNode } from 'react';

import { StyleSheet, View } from 'react-native';
import tailwind from 'twrnc';
import ChooseRide from './ChooseRide';
import RideType from './RideType';

interface RideProps {
  children: ReactNode;
}

export type RideStackParamList = {
  ChooseRide: undefined;
  ChooseRideType: undefined;
};

function Ride() {
  const RideStack = createNativeStackNavigator<RideStackParamList>();

  return (
    <View style={{ flex: 1 }}>
      <RideStack.Navigator>
        <RideStack.Screen
          name="ChooseRide"
          component={ChooseRide}
          options={{
            headerShown: false,
          }}
        />
        <RideStack.Screen
          name="ChooseRideType"
          component={RideType}
          options={{
            headerShown: false,
          }}
        />
      </RideStack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({});

export default Ride;
