import { Box, CircularProgress,  Stack,circularProgressClasses } from "@mui/material"

const LoadingIndicator = () => {
  return (
    <Stack width="100%" height='100%' alignItems="center" justifyContent="center">

  <CircularProgress color="success"  size={200}    sx={{animationDuration: '1500ms',  
     [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },}}     thickness={4}/>

    {/* Agrega aquí tu indicador de carga personalizado */}
  </Stack>
  )
}

export default LoadingIndicator
