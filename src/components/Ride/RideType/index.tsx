import { ReactNode } from 'react';

import { View, Text, StyleSheet } from 'react-native';

interface RideTypeProps {
  children: ReactNode;
}

function RideType() {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>RideType</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#312e38',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
});

export default RideType;
