export class fetchFromScratch {
  constructor(url) {
    // if(location.protocol === "http:"){
    //   this.url = `http://${ip}:${port}`;
    // }
    // else{
    //   port++;
    //   this.url = `https://${ip}:${port}`;
    // }
      this.url = url
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
