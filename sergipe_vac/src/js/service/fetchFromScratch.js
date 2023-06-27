export class fetchFromScratch {
  constructor(ip, port) {
    this.url = `http://${ip}:${port}`;
  }

  async dataReturn(route) {
    const fullUrl = `${this.url}/api/${route}`;
    console.log(fullUrl);

    try {
      const response = await fetch(fullUrl);
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.log('Ocorreu um erro na requisição:', error);
    }
  }
}
