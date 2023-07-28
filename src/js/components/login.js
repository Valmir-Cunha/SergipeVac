import { scriptRequisicaoBackend } from '../service/scriptRequisicaoBackend.js';

const requisicao = new scriptRequisicaoBackend();

const redirecionar = () => {
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;

  console.log("Username:", login);
  console.log("Password:", password);
    
    if(login == "teste"){
        window.location.href = './components/estatisticas.html';
    }
        
};

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener('submit', (event) => {
  event.preventDefault()
  redirecionar();
});
