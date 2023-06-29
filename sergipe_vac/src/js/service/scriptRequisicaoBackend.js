import {fetchFromScratch} from './fetchFromScratch.js'

export class scriptRequisicaoBackend {
    constructor() {
        this.url = "https://sergipevacbackend-production.up.railway.app"
        
        this.fetchBack = new fetchFromScratch(this.url)
    }
    
    async ObterContagemPorEtnia() {
        return await this.fetchBack.dataReturn("Relatorio/contagemporetnia")
    }
}
