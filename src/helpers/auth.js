const tokenName = "@token-spotify";

const getToken = () => localStorage.getItem(tokenName);

const setToken = value => localStorage.setItem(tokenName, value);

export { getToken, setToken };
