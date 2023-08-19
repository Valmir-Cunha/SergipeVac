import { Geocodificador } from '../../service/localizacao.js';
import { scriptRequisicaoBackendLocalizacao } from '../../service/scriptRequisicaoBackendLocalizacao.js';

export class Localizador {
    constructor() {
        this.obterlocalizcao = new Geocodificador();
        this.localizacao = new scriptRequisicaoBackendLocalizacao();
    }

    async getLocation() {
        if (navigator.geolocation) {
            try {
                await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(
                        position => {
                            this.showPosition(position)
                                .then(resolve) // Resolve a promessa externa quando a inserção é bem-sucedida
                                .catch(reject);
                        },
                        error => {
                            this.showError(error);
                            reject(error);
                        }
                    );
                });
            } catch (error) {
                console.error(error);
            }
        } else {
            console.log("Geolocalização não é suportada neste navegador.");
        }
    }
    
    async showPosition(position) {


        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        let cidade = await this.obterlocalizcao.obterLocalizacao(latitude, longitude);

        const local = {
            ...cidade,
            quantidade: 1
        };

        console.log("Latitude: " + latitude + "\nLongitude: " + longitude);
        console.log("Cidade:" + JSON.stringify(local));

        return this.localizacao.adicionar(local);
    }

    showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("Usuário negou a solicitação de geolocalização.");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Informações de localização não estão disponíveis.");
                break;
            case error.TIMEOUT:
                alert("A solicitação para obter a localização do usuário expirou.");
                break;
            case error.UNKNOWN_ERROR:
                alert("Ocorreu um erro desconhecido ao tentar obter a localização do usuário.");
                break;
        }
    }
}