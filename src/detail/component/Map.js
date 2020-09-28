import { 
    GoogleMap, LoadScript, DirectionsService, DirectionsRenderer, Marker 
} from '@react-google-maps/api';


const options = {
    polylineOptions: {
        strokeColor: "blue",
        strokeWeight: 6,
        strokeOpacity: 0.5
    }
};
function Directions (props) {
    const [directions, setDirections] = React.useState();
    const {origin, destination} = props;
    const count = React.useRef(0);
    
    console.log(origin);
    console.log(destination);

    React.useEffect(()=>{
        count.current = 0;
        console.log(origin, destination);
    },[origin.lat, origin.lng, destination.lat, destination.lng]);

    const directionsCallback = (result, status) => {
        console.log(result, status);
        if (status === "OK" && count.current === 0) {
            count.current += 1;
            setDirections(result);
        }
    };

    return (
        <>
            <DirectionsService 
                options={{
                    destination: destination,
                    origin: origin,
                    travelMode: 'TRANSIT'
                }}
                callback={directionsCallback}
            />
            <DirectionsRenderer directions={directions} options={options} />
        </>
    );
};

function toFloatLatLng(obj) {
    const lat = parseFloat(obj.lat);
    const lng  = parseFloat(obj.lng);
    return { lat, lng };
}
function toCoordinatesString(obj) {
    const coordinates = Object.values(obj).join(',');
    console.log(coordinates)
    return coordinates;
}

export default function Map(props) {
    const {origin, destination} = props;
    
    if( origin.lat && origin.lng && destination.lat && destination.lng ) {
        return (
            <LoadScript googleMapsApiKey={"AIzaSyALHpeFI7Zg9iOcp7DjETfJNZkcPRByN58"}>
                <GoogleMap
                    mapContainerStyle={{
                        height: "100%",
                        width: "100%"
                    }}
                    zoom={16}
                    center={toFloatLatLng(origin)}
                    >
                        <Marker position={toFloatLatLng(destination)} />
                        <Directions origin={toFloatLatLng(origin)} destination={toFloatLatLng(destination)} />
                </GoogleMap>
            </LoadScript>
        )
    }
    return null;
};

