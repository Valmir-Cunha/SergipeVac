import {fetchFromScratch} from './fetchFromScratch.js'

export class scriptRequisicaoBackendUsuario {
    constructor() {
        this.url = "https://back.guugascode.site"

        this.fetchBack = new fetchFromScratch(this.url)
    }

    async cadastrar(user) {
        return this.fetchBack.dataReturn("Usuario/cadastrar",'POST',user)
    }

    async atualizar(user,id) { 
        return this.fetchBack.dataReturn(`Usuario/atualizar/${id}`,'PUT',user)
    }

    async remover(id) { 
        return this.fetchBack.dataReturn(`Usuario/excluir/${id}`,'DELETE')
    }

    async obter(id) {
        return this.fetchBack.dataReturn(`Usuario/obter/${id}`)
    }

    async obterTodos() {
        return this.fetchBack.dataReturn("Usuario/obterTodos")
    }

}