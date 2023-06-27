import {scriptRequisicaoBackend} from '../service/scriptRequisicaoBackend.js'

const requisicao = new scriptRequisicaoBackend()

let json = await requisicao.ObterContagemPorEtnia()

console.log(json)

