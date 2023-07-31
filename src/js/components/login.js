import { scriptRequisicaoBackend } from '../service/scriptRequisicaoBackendRelatorio.js';

const requisicao = new scriptRequisicaoBackend();

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
