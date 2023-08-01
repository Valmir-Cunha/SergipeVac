import {fetchFromScratch} from './fetchFromScratch.js'
export class scriptRequisicaoBackendLocalizacao{
    constructor() {
        this.url = "https://back.guugascode.site"
        
        this.fetchBack = new fetchFromScratch(this.url)
    }
       
    async adicionar({estado,cidade}){
    }
    
    async obterLocais(){
    }
} 
