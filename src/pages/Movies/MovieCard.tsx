import { Link } from "react-router-dom"
import styles from "./MovieCard.module.scss"
import { Card, CardMedia } from "@mui/material"

interface MovieCardProps {
  id: number,
  title: string,
  overview: string,
  popularity: number,
  image?: string,
}

function MovieCard({
  id, 
  title, 
  overview, 
  popularity, 
  image="/movie-thumb.png", 
}: MovieCardProps) {
  return (
    <Card>
      <CardMedia component="div" image={image} sx={{pt: "56.25%"}} />
      
      <div className={styles.content}>
        <div>
          <Link to={`/movies/${id}`}>{title}</Link>
          <div className={styles.overview}>{overview}</div>
          <div className={styles.popularity}>{popularity}</div>
        </div>
      </div>
    </Card>
  )
}

export default MovieCard