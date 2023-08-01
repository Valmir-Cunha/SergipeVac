export class Geocodificador {
    async obterLocalizacao(latitude, longitude) {
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10`;
        
        console.log(url)
        return await fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.address && data.address.town) {    
                    const cidade = data.address.town;
                    const estado = data.address.state;
                    return {cidade, estado};
                } else {
                    throw new Error("Não foi possível obter o nome da cidade.");
                }
            })
            .catch(error => {
                throw new Error("Erro versao 1:", error);
            });
    }
}