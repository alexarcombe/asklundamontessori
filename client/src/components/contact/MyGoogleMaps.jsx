import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const MyGoogleMaps = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 55.4780375, lng: 13.0224893 }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: 55.4780375, lng: 13.0224893 }} />
      )}
    </GoogleMap>
  ))
);

export default MyGoogleMaps;
