interface MovieCardProps {
  title: string,
  overview: string,
  popularity: number,
}

function MovieCard({title, overview, popularity }: MovieCardProps) {
  return (
    <div>
      <div>{title}</div>
      <div>{overview}</div>
      <div>{popularity}</div>
    </div>
  )
}

export default MovieCard