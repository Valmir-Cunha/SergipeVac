import { Geocodificador } from '../../service/localizacao.js';

class Localizador {
    constructor() {
        this.obterlocalizcao = new Geocodificador();
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

    jaAdicionado() {
        const cookies = document.cookie.split("; ");
        for (const cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split("=");
            if (cookieName === "local") {
                return true;
            }
        }
        return false;
    }

    adicionarCookie() {
        const expirationDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); 
        const domain = "sergipevacrefatorado.guugascode.site";
        document.cookie = `local=true; expires=${expirationDate.toUTCString()}; domain=${domain}`;
    }

    async showPosition(position) {

        if (this.jaAdicionado()) {
            return;
        }
        
        console.log("novo user")
        
        this.adicionarCookie();
        
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        let cidade = await this.obterlocalizcao.obterLocalizacao(latitude, longitude);

        const local = {
            ...cidade,
            quantidade: 1
        };

        console.log("Latitude: " + latitude + "\nLongitude: " + longitude);
        console.log("Cidade:" + JSON.stringify(local));
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

const localizador = new Localizador();
localizador.getLocation();
