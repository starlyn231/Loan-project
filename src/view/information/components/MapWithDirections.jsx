import { Box, ButtonGroup, Stack, TextField } from '@mui/material'

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'
import { useRef, useState } from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';

export const MapWithDirections = () => {
  const center = { lat: 48.8584, lng: 2.2945 }
  /*
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const handleStartChange = (event) => {
    setStart(event.target.value);
  };

  const handleEndChange = (event) => {
    setEnd(event.target.value);
  };
<input type="text" value={start} onChange={handleStartChange} />
      <input type="text" value={end} onChange={handleEndChange} />
  */
  const { isLoaded } = useJsApiLoader({
    //my appi AIzaSyADoOtheQRLLLlwJXisubhw1U57S2YrcOc
    googleMapsApiKey: 'AIzaSyDJpQqWLLZyO6uPvqkLI5YgWVwg0keg_Qc',
    libraries: ['places'],
  })
  const [map, setMap] = useState(null)
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')
  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef()


  if (!isLoaded) {
    return <div>Cargando...</div>
  }

  async function calculateRoute() {
    if (originRef.current.value === '' || destiantionRef.current.value === '') {
      return
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
  }

  function clearRoute() {
    setDirectionsResponse(null)
    setDistance('')
    setDuration('')
    originRef.current.value = ''
    destiantionRef.current.value = ''
  }



  return (
    <Stack position='relative'
      flexDirection='column'
      alignItems='center'

      height='300px'
    >

      <Box position='absolute' left={0} top={0} height='100%' width='100%'>
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={map => setMap(map)}
        >
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>

      </Box>

      <Box
        p={4}
        borderRadius='lg'
        m={4}
        bgColor='white'
        shadow='base'
        minW='container.md'
        zIndex={1000}
      >

        <Stack spacing={2} justifyContent='space-between'>
          <Box flexGrow={1}>
            <Autocomplete>
              <TextField type='text' placeholder='Origin' id="outlined-basic" label="Outlined"
                variant="outlined" ref={originRef} />

            </Autocomplete>
          </Box>



        </Stack>

      </Box>
    </Stack>)
}