import react, {useState} from "react";
import './App.css';
import api from "./service/api.js";

function App() {

  const [user, setUser] = useState("")
  const [dados, setDados] = useState("")
  
    function atribuirUser (e){
      e.preventDefault();
      setUser(e.target.value);
    }

  
    function consultarUser () {
  
      let url = user
  
      api.get(url).then((response) => {
  
          if(!response.data.erro){
            let objeto = JSON.stringify(response.data);
            setDados(objeto)
          } else{
              setDados("Sinto muito, mas não foi possível encontrar os dados do USER informados")}
          }
  
         ).catch((err) => {
          setDados("Sinto muito, mas não foi possível encontrar os dados do USER informados")}
      )
  }


  return (
      <div className="App">

        <header className="App-header">
          <h1>INFORME SEU USER DO GITHUB</h1>
        </header>

        <div>
          <input type="text" name="user" onChange={(e) => atribuirUser(e)}/>
          <button onClick={() => consultarUser()}>Buscar GIT HUB</button>
        </div>

        <div name="resultado">
          {dados}
        </div>

      </div>
  );

}

export default App;
