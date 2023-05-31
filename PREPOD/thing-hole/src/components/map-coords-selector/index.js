import React, {useState}  from 'react';
import {useMapEvents} from 'react-leaflet/hooks';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Marker } from 'react-leaflet/Marker';
import {Popup} from 'react-leaflet/Popup';
import IconPerson from './marker-icon';

import 'leaflet/dist/leaflet.css';


export const MapCoordsSelector = () => {

    const [coords, setCoords] = useState(null);

    // const map = useMapEvents({
    //     click (e) {
    //         console.log(map.locate());
    //         console.log('click', e);
    //     },
    //     locationfound (e) {
    //         console.log('location found',e);
    //         setCoords(e.latlng);
    //     }
    // });

    const zoom = 13;
    const crd = [37.0102, -91.7129];


    return (
    <>
        <div>Map coords: {coords}</div>
        <MapContainer center={crd} zoom={zoom}  style={{ height: '400px', width: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={crd} icon={IconPerson} styles={{border: 'none'}}>
            <Popup>
                 asdasdsd
            </Popup>
             
            </Marker>
        </MapContainer>
    </>
        
    );
}