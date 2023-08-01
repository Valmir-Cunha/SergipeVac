export class fetchFromScratch {
  constructor(url) {
    this.url = url
  }

  async fetchLocal(url, method, body) {
    if (method && body) {
      const json = JSON.stringify(body)
      console.log(json)
      return fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: json
      }

      )
    }
    else if (method) {
      return fetch(url,
        method = method
      )
    }

    return fetch(url)
  }


  async dataReturn(route, method = null, body = null) {
    const fullUrl = `${this.url}/api/${route}`;
    console.log(fullUrl);

    try {
      const response = await this.fetchLocal(fullUrl, method, body)
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response}`);
      }
      console.log(response)
      return response.json();
    } catch (error) {
      console.log('Ocorreu um erro na requisição:', error);
    }
  }
}
