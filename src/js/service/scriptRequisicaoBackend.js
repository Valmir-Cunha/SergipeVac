import {fetchFromScratch} from './fetchFromScratch.js'

export class scriptRequisicaoBackend {
    constructor() {
        this.url = "https://sergipevacbackend-production.up.railway.app"
        
        this.fetchBack = new fetchFromScratch(this.url)
    }
    
    async ObterContagemPorEtnia() {
        return await this.fetchBack.dataReturn("Relatorio/contagemporetnia")
    }
    
    async ObterContagemPorSexo() {
        return await this.fetchBack.dataReturn("Relatorio/contagemporsexo")
    }
        
    async ObterContagemPorEstabelecimento() {
        return await this.fetchBack.dataReturn("Relatorio/contagemporestabelecimento")
    }
    
    async ObterContagemPorNacionalidade() {
        return await this.fetchBack.dataReturn("Relatorio/contagempornacionalidade")
    }
    
    async ObterContagemPorDose() {
        return await this.fetchBack.dataReturn("Relatorio/contagempordose")
    }
    
    async ObterContagemPorIdade() {
        return await this.fetchBack.dataReturn("Relatorio/contagemporidade")
    }
    
    async ObterContagemPorSistema() {
        return await this.fetchBack.dataReturn("Relatorio/contagemporsistema")
    }
    
    async ObterContagemPorVacina() {
        return await this.fetchBack.dataReturn("Relatorio/contagemporvacinas")
    }
    
    async ObterContagemPorGrupo() {
        return await this.fetchBack.dataReturn("Relatorio/contagemporgrupo")
    }
    async ObterTotalizador() {
        return await this.fetchBack.dataReturn("Relatorio/totalizadores")
    }
}
