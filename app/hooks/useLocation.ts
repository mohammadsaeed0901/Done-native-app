import { useEffect, useState } from "react";
import * as Location from "expo-location";

const useLocation = () => {
    const [location, setLocation] = useState<{ latitude: number | undefined; longitude: number | undefined }>();

    const getLocation = async () => {
      try {
        const { granted } = await Location.requestBackgroundPermissionsAsync();
        if (!granted) return;
        const result = await Location.getLastKnownPositionAsync();
        const latitude = result?.coords.latitude;
        const longitude = result?.coords.longitude;
        setLocation({ latitude, longitude });
      } catch (error) {
        console.log(error);
      }
    };
    
    useEffect(() => {
      getLocation();
    }, []);

    return location;
};

export default useLocation;