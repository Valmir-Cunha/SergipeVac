import { scriptRequisicaoBackendUsuario } from "../../service/scriptRequisicaoBackendUsuario.js";

class UsuariosRetorno {

    constructor() {
        this.requisicaoUsuarios = new scriptRequisicaoBackendUsuario();
    }

    async gerarTabela() {
        const dadosUsuarios = await this.requisicaoUsuarios.obterTodos()

        const tabelaBody = document.querySelector("tbody")

        dadosUsuarios.forEach(({ nome, email }) => {
            const linha = document.createElement("tr");
            linha.innerHTML = `
          <td>${nome}</td>
          <td>${email}</td>
        `;

            tabelaBody.appendChild(linha);
        });


    }
}

const usuarios = new UsuariosRetorno();

usuarios.gerarTabela();