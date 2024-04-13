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

interface PageResponse<TResult> {
  page: number,
  results: TResult[],
}

export const client = {
  async getPlayNow(): Promise<MovieDetails[]>  {
  
  const response = await get<PageResponse<MovieDetails>>("/movie/now_playing?page=1")

  return response.results
    
  }
}



