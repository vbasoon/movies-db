

export const client = {
  async getPlayNow()  {
  const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzE0Y2U3ZWExYTRhNzA1OTJkMTQyMGUwZmY0MTc4NCIsInN1YiI6IjY2MTc3MjU5OTBiODdlMDE2MzNkNGE4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q8rAoV3PUO8xOWaxlwOt5UL5-pLW14pItJSUVy35rqw'
        }
  };

  const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options)

  const json = response.json()

  return json;
    
}
}