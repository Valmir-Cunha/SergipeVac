import { scriptRequisicaoBackendUsuario  } from "../../service/scriptRequisicaoBackendUsuario.js";
import { Localizador } from "../localizacao/obterLocalizacao.js";


const localizador = new Localizador()

const redirecionar = async () => {
  const login = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  console.log("Username:", login);
  console.log("Password:", password);
    
  if(login == "teste"){
    await localizador.getLocation()
    // window.location.href = './estatisticas.html';
}
        
};

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener('submit', (event) => {
  event.preventDefault()
  redirecionar();
});
