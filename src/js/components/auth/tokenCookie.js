function setTokenCookie(cookieName,token, expirationHours) {

  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + expirationHours * 60 * 60 * 1000);

  const cookieValue = encodeURIComponent(token) + (expirationHours ? `; expires=${expirationDate.toUTCString()}` : '') + '; path=/';
  document.cookie = `${cookieName}=${cookieValue}`;
}

function getTokenFromCookie(cookieName) {

  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.startsWith(`${cookieName}=`)) {
      return decodeURIComponent(cookie.substring(cookieName.length + 1));
    }
  }
  return null;
}

function clearTokens() {
  const cookiesParaExcluir = ["name", "token"];
    cookiesParaExcluir.forEach(nome => {
        document.cookie = `${nome}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
}

export { setTokenCookie, getTokenFromCookie, clearTokens};
