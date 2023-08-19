import {fetchFromScratch} from './fetchFromScratch.js'

export class scriptRequisicaoBackendAutenticacao{
    constructor() {
        this.url = "https://back.guugascode.site"
        
        this.fetchBack = new fetchFromScratch(this.url)
    }
       
    async login(user){
        return this.fetchBack.dataReturnToken("Autenticacao/login","POST",user)
    }
} 
