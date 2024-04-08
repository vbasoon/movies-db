import { Link } from "react-router-dom"

import styles from "./MovieCard.module.scss"

interface MovieCardProps {
  id: number,
  title: string,
  overview: string,
  popularity: number,
}

function MovieCard({id, title, overview, popularity }: MovieCardProps) {
  return (
    <article className={styles.card}>
      <img 
        className={styles.thumbnail} 
        src="/movie-thumb.png" 
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