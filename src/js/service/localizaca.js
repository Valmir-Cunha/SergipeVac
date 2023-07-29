export class Geocodificador {
    async obterCidade(latitude, longitude) {
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10`;

        return fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.address && data.address.city) {    
                    const cidade = data.address.city;
                    return cidade;
                } else {
                    throw new Error("Não foi possível obter o nome da cidade.");
                }
            })
            .catch(error => {
                throw new Error("Erro :", error);
            });
    }
}