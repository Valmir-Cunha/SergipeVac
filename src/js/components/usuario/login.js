import { scriptRequisicaoBackendUsuario  } from "../../service/scriptRequisicaoBackendUsuario.js";

const requisicaoUsuario = new scriptRequisicaoBackendUsuario()

const redirecionar = () => {
  const login = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  console.log("Username:", login);
  console.log("Password:", password);
    
  if(login == "teste"){
    window.location.href = './estatisticas.html';
}
        
};

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener('submit', (event) => {
  event.preventDefault()
  redirecionar();
});