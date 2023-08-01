export class fetchFromScratch {
  constructor(url) {
    this.url = url
  }

  async fetchLocal(url, method, body) {
    if (method && body) {
      console.log(body)
      return fetch(url,
        headers= {
        'Content-Type': 'application/json',
      },
        method = method,
        body = JSON.stringify(body)
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
      return response.json();
    } catch (error) {
      console.log('Ocorreu um erro na requisição:', error);
    }
  }
}
