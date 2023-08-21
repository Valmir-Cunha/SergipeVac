import {fetchFromScratch} from './fetchFromScratch.js'

export class scriptRequisicaoBackendSincronizacao{
    constructor() {
        this.url = "https://back.guugascode.site"
        
        this.fetchBack = new fetchFromScratch(this.url)
    }
       
    async obterUltima(){
        return this.fetchBack.dataReturn("Sincronizacao/obterUltimaSincronizacao")
    }
    
    async obterUltimaBemSucedida() {
        return this.fetchBack.dataReturn("Sincronizacao/obterUltimaSincronizacaoBemSucedida")
    }
} 
