import { View } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

export const MapsPage = () => {

    const coordInitial = {
        latitude: 39.9250141161941,
        longitude: 32.8371215115415,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };

    return (
        <View>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{ width: 500, height: 500 }}
                initialRegion={coordInitial}>
                <Marker
                    coordinate={{
                        latitude: 39.9250141161941,
                        longitude: 32.8371215115415,
                    }}
                    title="Anıtkabir."
                />
            </MapView>
        </View>
    )
}
