import {fetchFromScratch} from './fetchFromScratch.js'

export class scriptRequisicaoBackend {
    constructor() {
        this.ip = "172.30.0.5"
        this.port ="53360"
        
        this.fetchBack = new fetchFromScratch(this.ip,this.port)
    }
    
    async ObterContagemPorEtnia() {
        return await this.fetchBack.dataReturn("Relatorio")
    }
}
