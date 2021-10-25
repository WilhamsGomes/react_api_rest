import axios from "axios"; //importando pacote axios


//criando uma instância, ou seja, criando um objeto do tipo axios
const api = axios.create({
    baseURL: "https://api.github.com/users/" //URL básica da API
});

//estou deixando o component api visivel em toda aplicação
export default api;
