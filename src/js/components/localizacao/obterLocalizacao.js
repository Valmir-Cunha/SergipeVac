import {Geocodificador} from '../../service/localizacao.js'

const obterlocalizcao = new Geocodificador()

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        console.log("Geolocalização não é suportada neste navegador.");
    }
}

async function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let cidade = await obterlocalizcao.obterCidade(latitude,longitude)
    
    
    console.log("Latitude: " + latitude + "\nLongitude: " + longitude);
    console.log("Cidade:"+cidade)
    
}

function showError(error) {
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

getLocation()