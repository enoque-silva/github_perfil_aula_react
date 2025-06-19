import Perfil from "./components/Perfil";
import ListaRepositorios from "./components/ListaRepositorios";
import { useState } from "react";


function App() {

  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ListaRepositorios nomeUsuario={nomeUsuario} />
        </>
      )}
    </>
  )
}

export default App
