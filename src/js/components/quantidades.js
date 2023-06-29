import {scriptRequisicaoBackend} from '../service/scriptRequisicaoBackend.js'

const requisicao = new scriptRequisicaoBackend()

export async function atribuirValorParaDivs() {

    let valores = localStorage.getItem('cards')

    if (valores == null) {
        const json = await requisicao.ObterTotalizador()
        console.log(json)
        valores = { 
            vacinados: json.quantidadeDePacientesVacinados,
            estabelecimentos: json.quantidadeDeVacinasAplicadas,
            estrangeiros: json.quantidadeDeEstrangeiros,
            doses: json.fabricanteComMaisDosesAplicadas.fabricante
        };

        localStorage.setItem('cards', JSON.stringify(valores))
    } else {
        valores = JSON.parse(localStorage.getItem('cards'))
    }

    for (const id in valores) {
        const div = document.getElementById(id);
        if (div) {
            div.textContent = valores[id];
        }
    }
}

atribuirValorParaDivs();
