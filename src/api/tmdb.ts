import configuration from "../configuration"

async function get(relativeURL: string) {
  const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
          Authorization: `Bearer ${configuration.apiTkn}`
        }
  };

  const response = await fetch(
    `${configuration.apiUrl}/3${relativeURL}`, options);

  const json = response.json()

  return json;
}

export const client = {
  async getPlayNow()  {
  
  return get("/movie/now_playing?page=1")
    
}
}