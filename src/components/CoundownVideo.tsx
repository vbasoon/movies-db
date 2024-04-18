import { Card, CardActions, CardMedia, IconButton } from "@mui/material"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import PauseIcon from "@mui/icons-material/Pause"
import { useRef, useState } from "react"

const CoundownVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlaying = () => {
    const nextPlaying = !isPlaying

    if(nextPlaying) {
      videoRef.current?.play()
    } else {
      videoRef.current?.pause()
    }
  }
  return (
    <Card>
      <CardMedia>
    <video ref={videoRef} src="https://videos.pexels.com/video-files/19990812/19990812-uhd_2560_1440_30fps.mp4" 
    height="600" onPlay = {() => setIsPlaying(true)} onPause = {() => setIsPlaying(false)}
    />
     </CardMedia>
     <CardActions>
      <IconButton onClick={togglePlaying}>
        {isPlaying ? ( 
          <PauseIcon sx={{height: 38, width: 38 }}/>
          ) : (
          <PlayArrowIcon sx={{height: 38, width: 38 }}/>
        )}
      </IconButton>
     </CardActions>
    </Card>
    
  )

}

export default CoundownVideo