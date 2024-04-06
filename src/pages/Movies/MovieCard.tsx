import { Link } from "react-router-dom"

interface MovieCardProps {
  id: number,
  title: string,
  overview: string,
  popularity: number,
}

function MovieCard({id, title, overview, popularity }: MovieCardProps) {
  return (
    <div>
      <Link to={`/movies/${id}`}>{title}</Link>
      <div>{overview}</div>
      <div>{popularity}</div>
    </div>
  )
}

export default MovieCard