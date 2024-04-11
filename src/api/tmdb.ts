import configuration from "../configuration"

async function get<TBody>(relativeURL: string): Promise<TBody> {
  const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
          Authorization: `Bearer ${configuration.apiTkn}`
        }
  };

  const response = await fetch(
    `${configuration.apiUrl}/3${relativeURL}`, options);

  const json: TBody = await response.json()

  return json;
}

interface MovieDetails {
  id: number,
  title: string,
  overview: string,
  popularity: number,
}

export const client = {
  async getPlayNow(): Promise<MovieDetails[]>  {
  
  return get("/movie/now_playing?page=1")
    
}
}