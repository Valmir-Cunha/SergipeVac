import { Localizador } from "../localizacao/obterLocalizacao.js";
import { scriptRequisicaoBackendAutenticacao } from "../../service/scriptRequisicaoBackendAutenticacao.js";

const localizador = new Localizador()
const autenticador = new scriptRequisicaoBackendAutenticacao()

const redirecionar = async () => {
  const login = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  const user = {
    nome:"",
    email:login,
    senha:password
  }
  
  autenticador.login(user)
    .then(async ()=>{
      alert("foi não meu parceiro")
    })
    .catch(async () => {
      await localizador.getLocation()
      window.location.href = './estatisticas.html';
    })
  
        
};

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener('submit', (event) => {
  event.preventDefault()
  redirecionar();
});
