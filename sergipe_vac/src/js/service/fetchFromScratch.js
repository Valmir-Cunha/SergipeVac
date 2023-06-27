export class fetchFromScratch {
    constructor(ip, port) {
        this.url = ip + ":" + port;
    }

    async dataReturn(route) {
        console.log(route)
        return await fetch(this.url+"/api/"+route)
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.status);
          }
          return response.json();
        })
        .catch(error => {
          console.log('Ocorreu um erro na requisição:', error);
        });
    }
}

