import { scriptRequisicaoBackendUsuario  } from "../../service/scriptRequisicaoBackendUsuario.js";
import { Localizador } from "../localizacao/obterLocalizacao.js";


const requisicaoUsuario = new scriptRequisicaoBackendUsuario()
const localizador = new Localizador()

const redirecionar = () => {
  const login = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  console.log("Username:", login);
  console.log("Password:", password);
    
  if(login == "teste"){
    localizador.showPosition()
    window.location.href = './estatisticas.html';
}
        
};

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener('submit', (event) => {
  event.preventDefault()
  redirecionar();
});
