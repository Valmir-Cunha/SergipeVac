import { scriptRequisicaoBackend } from '../service/scriptRequisicaoBackend.js'

const requisicao = new scriptRequisicaoBackend()

export async function atribuirValorParaDivs() {

    const json = await requisicao.ObterTotalizador()
    console.log(json)
    let valores = {
        vacinados: json.quantidadeDePacientesVacinados,
        estabelecimentos: json.numEstabelecimentos,
        estrangeiros: json.quantidadeDeEstrangeiros,
        doses: json.fabricanteComMaisDosesAplicadas.fabricante
    };


    for (const id in valores) {
        const div = document.getElementById(id);
        if (div) {
            div.textContent = valores[id];
        }
    }
}

atribuirValorParaDivs();
