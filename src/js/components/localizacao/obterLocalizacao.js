import { Geocodificador } from '../../service/localizacao.js';
import { scriptRequisicaoBackendLocalizacao } from '../../service/scriptRequisicaoBackendLocalizacao.js';

export class Localizador {
    constructor() {
        this.obterlocalizcao = new Geocodificador();
        this.localizacao = new scriptRequisicaoBackendLocalizacao();
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                this.showPosition.bind(this),
                this.showError.bind(this)
            );
        } else {
            console.log("Geolocalização não é suportada neste navegador.");
        }
    }

    async showPosition(position) {
        
        // console.log("novo user")
        
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        let cidade = await this.obterlocalizcao.obterLocalizacao(latitude, longitude);

        const local = {
            ...cidade,
            quantidade: 1
        };

        console.log("Latitude: " + latitude + "\nLongitude: " + longitude);
        console.log("Cidade:" + JSON.stringify(local));
        
        this.localizacao.adicionar(local);
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