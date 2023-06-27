import {fetchFromScratch} from './fetchFromScratch.js'

export class scriptRequisicaoBackend {
    constructor() {
        this.ip = "localhost"
        this.port ="10000"
        
        this.fetchBack = new fetchFromScratch(this.ip,this.port)
    }
    
    async ObterContagemPorEtnia() {
        return await this.fetchBack.dataReturn("Relatorio")
    }
}
