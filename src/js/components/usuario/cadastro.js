import { scriptRequisicaoBackendUsuario  } from "../../service/scriptRequisicaoBackendUsuario.js";

const requisicaoUsuario = new scriptRequisicaoBackendUsuario()

const cadastro= async () => {
        
    const user = {
        nome: document.getElementById("username").value,
        email: document.getElementById("email").value,
        senha: document.getElementById("password").value
    }
    
    requisicaoUsuario.cadastrar(user)
    .then(() => {
        alert("erro no cadastramento");
    })
    .catch((err) => {
        alert("cadastrado com sucesso");
        window.location.href = './login.html';
    });

    
    // 
    
}

const form = document.getElementById("cadastro")

form.addEventListener("submit",(event) => {
    event.preventDefault()
    cadastro()
})