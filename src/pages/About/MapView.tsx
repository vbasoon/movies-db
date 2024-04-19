import { useEffect, useRef, useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { addPopupToMapWidget, createMapWidget } from './mapWidget'
import { Map } from 'leaflet'
import { createPortal } from 'react-dom'

const MapView = () => {
  const containerRef =useRef<HTMLDivElement>(null)
  const mapRef =useRef<Map | null>(null)
  const[popupContainer, setPopupContainer] = useState<HTMLElement | null>(null)
  
  useEffect(()=> {
    if (mapRef.current === null) {
      const map = createMapWidget(containerRef.current!);
      mapRef.current = map;
      const popupDiv = addPopupToMapWidget(map);
      setPopupContainer(popupDiv)
    }
  }, [])
  return (
    <Container ref={containerRef} sx={{width: 800, height: 600, my: 2}}>
      {popupContainer !== null && createPortal(<Greeting />, popupContainer)}
    </Container>
  )
}

const Greeting = () => {
  return(
    <Box>
      <Typography>Greeting from Ukraine!</Typography>
      <FavoriteIcon sx={{ color: "#0056B9"}}/>
      <FavoriteIcon sx={{ color: "#FFD800"}}/>
    </Box>
  )
}

export default MapView