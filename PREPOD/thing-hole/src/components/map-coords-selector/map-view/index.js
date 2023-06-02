import React, {useState} from 'react';
import {useMapEvents} from 'react-leaflet/hooks';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Marker } from 'react-leaflet/Marker';
import IconPerson from '../marker-icon';


export const MapView = () => {
    const [coords, setCoords] = useState([0,0]);

    const map = useMapEvents({
        click (e) {
            map.locate();
  
            setCoords([e.latlng.lat, e.latlng.lng]);
        },
        locationfound (e) {
            // console.log('location found',e);
        }
    });

    console.log(coords);

    return (
        <>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={coords} icon={IconPerson} />
        </>
    );
};