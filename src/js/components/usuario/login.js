import { Localizador } from "../localizacao/obterLocalizacao.js";
import { scriptRequisicaoBackendAutenticacao } from "../../service/scriptRequisicaoBackendAutenticacao.js";
import { setTokenCookie } from "../auth/tokenCookie.js";

const localizador = new Localizador()
const autenticador = new scriptRequisicaoBackendAutenticacao()

const redirecionar = async () => {
  const login = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = {
    nome: "",
    email: login,
    senha: password
  }

  autenticador.login(user)
    .then(async (response) => {
      await localizador.getLocation()
      setTokenCookie(response,8);
      window.location.href = './estatisticas.html'
    })
    .catch(async () => {
      alert("foi não meu parceiro");
    })


};

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener('submit', (event) => {
  event.preventDefault()
  redirecionar();
});
