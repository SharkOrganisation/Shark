import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import React, { useState } from 'react'

const Saved = () => {
  const [mapReady, setMapReady] = useState(false);

  const onMapLayout = () => {
    setMapReady(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1, height: 300 }}
        initialRegion={{
          latitude: 35.821430,
          longitude: 10.634422,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onLayout={onMapLayout}
      >
        <Marker
          coordinate={{
            latitude: 35.821430,
            longitude: 10.634422,
          }}
          title="Marker Title"
          description="Marker Description"
        />
      </MapView>
    </View>
  )
}

export default Saved

const styles = StyleSheet.create({})