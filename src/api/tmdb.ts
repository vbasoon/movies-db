async function get(relativeURL: string) {
  const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzE0Y2U3ZWExYTRhNzA1OTJkMTQyMGUwZmY0MTc4NCIsInN1YiI6IjY2MTc3MjU5OTBiODdlMDE2MzNkNGE4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q8rAoV3PUO8xOWaxlwOt5UL5-pLW14pItJSUVy35rqw'
        }
  };

  const response = await fetch(
    `https://api.themoviedb.org/3${relativeURL}`, options);

  const json = response.json()

  return json;
}

export const client = {
  async getPlayNow()  {
  
  return get("/movie/now_playing?page=1")
    
}
}