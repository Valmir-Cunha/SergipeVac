import {clearTokens} from '../auth/tokenCookie.js'

const button = document.getElementById("logoff")

button.addEventListener("click",() => {

    clearTokens();

    window.location.href = '/';

})