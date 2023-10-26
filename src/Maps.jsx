import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useMemo } from "react";
import { motion } from "framer-motion";
import indiaStateCoordinates from "./States";
export default function Maps(props){
    const {isLoaded}=useLoadScript({googleMapsApiKey:"AIzaSyD2oC-mb91E3E4mRWsqXirv03ITbliTh6w"});


    if (!isLoaded){
        return <div>Loading</div>
    }

    function removeSpacesFromString(inputString) {
        // Use the replace() method with a regular expression to remove spaces
        return inputString.replace(/\s/g, '');
      }

      const state = removeSpacesFromString(props.name);
      const center=indiaStateCoordinates[state].center;
      const zoom=indiaStateCoordinates[state].zoom;
      

      const mapOptions = {
        mapId: '99d4c3a281236bf', // Replace with your custom map style ID
        // Add other map options here, such as center and zoom level
      };

    return (
    <motion.div className="w-screen h-screen mt-0">
    <Map center={center} options={mapOptions} zoom={zoom}/>
    </motion.div>
   

    )
}


function Map(props){
    const options= {
        mapId:"99d4c3a281236bf",
        disableDefaultUI:true,
        clickableIcons:false,
    }
    return <GoogleMap zoom={props.zoom} center={props.center} mapContainerStyle={{width:'100%', height:'100%'}} options={options}></GoogleMap>
}