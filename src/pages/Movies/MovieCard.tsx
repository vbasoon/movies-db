import { Link } from "react-router-dom"

import styles from "./MovieCard.module.scss"

interface MovieCardProps {
  id: number,
  title: string,
  overview: string,
  popularity: number,
  image?: string,
}

function MovieCard({id, title, overview, popularity, image="/movie-thumb.png" }: MovieCardProps) {
  return (
    <article className={styles.card}>
      <img 
        className={styles.thumbnail} 
        src={image} 
        alt="Movie thumbnail" 
      />
      <div className={styles.content}>
        <div>
          <Link to={`/movies/${id}`}>{title}</Link>
          <div className={styles.overview}>{overview}</div>
          <div className={styles.popularity}>{popularity}</div>
        </div>
      </div>
    </article>
  )
}

export default MovieCard