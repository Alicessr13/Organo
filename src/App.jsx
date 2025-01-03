import { useState } from 'react';
import Banner from './componentes/Banner/Banner.jsx'
import Formulario from './componentes/Formulario/index.jsx';
import Time from './componentes/Time/index.jsx';

function App() {

  const [colaboradores, setColaboradores] = useState('');

  const aoNovoColaboradorAdicionado =(colaborador) =>{
    console.log(colaborador);
    setColaboradores([...colaboradores],colaborador);
  }

  return (
    <div className="App">
      <Banner></Banner>
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}></Formulario>
      <Time nome="Programação"></Time>
      <Time nome="Front-End"></Time>
      <Time nome="Back-End"></Time>
    </div>
  );
}

export default App;
