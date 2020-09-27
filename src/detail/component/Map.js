import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';


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
                options={{origin, destination, travelMode: 'WALKING'}}
                callback={directionsCallback}
            />
            <DirectionsRenderer directions={directions} options={options} />
        </>
    );
};

export default function Map(props) {
    const {origin, destination} = props;
    return (
        <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={{
                    height: "100%",
                    width: "100%"
                }}
                zoom={16}
                center={origin? origin: JSON.parse(sessionStorage.getItem("location"))}
                >
                    <Directions origin={origin} destination={destination} />
            </GoogleMap>
        </LoadScript>
    )
};

