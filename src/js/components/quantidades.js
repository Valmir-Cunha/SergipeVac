
export async function atribuirValorParaDivs() {

    let valores = localStorage.getItem('cards')

    if (valores == null) {
        valores = {
            vacinados: "3.000.000",
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
