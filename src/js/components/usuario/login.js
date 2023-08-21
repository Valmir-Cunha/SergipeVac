import { Localizador } from "../localizacao/obterLocalizacao.js";
import { scriptRequisicaoBackendAutenticacao } from "../../service/scriptRequisicaoBackendAutenticacao.js";
import { setTokenCookie, getTokenFromCookie } from "../auth/tokenCookie.js";

const autenticador = new scriptRequisicaoBackendAutenticacao()

function mostrarCarregamento() {
  const loginForm = document.getElementById("loginForm");
  const loadingText = document.createElement("div");
  loadingText.textContent = "Carregando...";
  loadingText.classList.add("loading-text");

  loginForm.style.display = "none";
  loginForm.parentNode.insertBefore(loadingText, loginForm.nextSibling);
}

const mudarDePagina = async () => {
  try {
    const localizador = new Localizador();
    mostrarCarregamento();
    await localizador.getLocation();

    window.location.href = './estatisticas.html';
  } catch (error) {
    console.error(error);
  }
};


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
      if(response!=undefined){
        setTokenCookie('token',response, 8);
        setTokenCookie('name',login,8)
      await mudarDePagina()
      }else {
        alert("Usuario ou senha incorretas");
      }
    })
    .catch(async () => {
      alert("foi não meu parceiro");
    })


};

if (getTokenFromCookie('token') == null) {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault()
    redirecionar();
  });

}else {
  await mudarDePagina()
}