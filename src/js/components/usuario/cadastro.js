import { scriptRequisicaoBackendUsuario  } from "../../service/scriptRequisicaoBackendUsuario.js";

const requisicaoUsuario = new scriptRequisicaoBackendUsuario()

const cadastro= async () => {
        
    const user = {
        nome: document.getElementById("username").value,
        email: document.getElementById("email").value,
        senha: document.getElementById("password").value
    }
    
    alert(await requisicaoUsuario.cadastrar(user))
    
}

const form = document.getElementById("cadastro")

form.addEventListener("submit",(event) => {
    event.preventDefault()
    cadastro()
})