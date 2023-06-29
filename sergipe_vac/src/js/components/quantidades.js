export async function atribuirValorParaDivs(valores) {
  
    for (const id in valores) {
        const div = document.getElementById(id);
        if (div) {
            div.textContent = valores[id];
        }
    }
}

await atribuirValorParaDivs();
