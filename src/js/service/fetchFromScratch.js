import { getTokenFromCookie } from "../components/auth/tokenCookie.js"

export class fetchFromScratch {
  constructor(url) {
    this.url = url
  }

  async fetchLocal(url, method, body) {
    const headers = {
      'Authorization': `Bearer ${getTokenFromCookie()}`
    };
  
    if (method && body) {
      headers['Content-Type'] = 'application/json';
    }
  
    const options = {
      method: method,
      headers: headers
    };
  
    if (body) {
      options.body = JSON.stringify(body);
    }
  
    try {
      const response = await fetch(url, options);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao fazer a solicitação.');
    }
  }
  async dataReturn(route, method = 'GET', body = null) {
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
  
  async dataReturnToken(route, method = null, body = null) {
    const fullUrl = `${this.url}/api/${route}`;
    console.log(fullUrl);

    try {
      const response = await this.fetchLocal(fullUrl, method, body=null)
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response}`);
      }
      // console.log(await response.text())
      return (await response.text()).toString();
    } catch (error) {
      console.log('Ocorreu um erro na requisição:', error);
    }
  }
}
