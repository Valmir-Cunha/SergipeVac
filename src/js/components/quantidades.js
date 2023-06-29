import {scriptRequisicaoBackend} from '../service/scriptRequisicaoBackend.js'

const requisicao = new scriptRequisicaoBackend()

export async function atribuirValorParaDivs() {

    let valores = localStorage.getItem('cards')

    if (valores == null) {
        valores = { 
            vacinados: "300000" ,
            estabelecimentos: "3.000.000",
            estrangeiros: "3.000.000",
            doses: "3.000.000"
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
