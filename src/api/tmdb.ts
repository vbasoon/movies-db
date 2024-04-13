import configuration from "../configuration"

async function get<TBody>(relativeUrl: string): Promise<TBody> {
  const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${configuration.apiTkn}`
        }
  };

  const response = await fetch(
    `${configuration.apiUrl}/3${relativeUrl}`, options);

  const json: TBody = await response.json()

  return json;
}

export interface MovieDetails {
  id: number,
  title: string,
  overview: string,
  popularity: number,
  backdrop_path?: string,
}

interface PageResponse<TResult> {
  page: number,
  results: TResult[],
}

// Add interface Configuration

interface Configuration {
  images: {
    base_url: string;
  }
}

export const client = {

  async getConfiguration() {
    return get<Configuration>("/configuration");
  },
  async getPlayNow(): Promise<MovieDetails[]>  {
    const response = await get<PageResponse<MovieDetails>>(
      "/movie/now_playing?page=1"
    );

    return response.results
    
  }
}



