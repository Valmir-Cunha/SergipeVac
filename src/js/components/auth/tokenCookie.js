function setTokenCookie(token, expirationHours) {
  const cookieName = 'token';
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + expirationHours * 60 * 60 * 1000);

  const cookieValue = encodeURIComponent(token) + (expirationHours ? `; expires=${expirationDate.toUTCString()}` : '') + '; path=/';
  document.cookie = `${cookieName}=${cookieValue}`;
}

function getTokenFromCookie() {
  const cookieName = 'token';
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.startsWith(`${cookieName}=`)) {
      return decodeURIComponent(cookie.substring(cookieName.length + 1));
    }
  }
  return null;
}

export { setTokenCookie, getTokenFromCookie };
