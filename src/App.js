import { useState } from "react";
import Banner from "./compenentes/Banner";
import Formulario from "./compenentes/Formulario/index";
import Time from "./compenentes/Time";
import Rodape from "./compenentes/Rodape";

function App() {
  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Front-end",
      corPrimaria: "#E8F8FF",
      corSecundaria: "#83CFFA",
    },
    {
      nome: "Data-science",
      corPrimaria: "#F0F8E2",
      corSecundaria: "#A6D157",
    },
    {
      nome: "Devops",
      corPrimaria: "#FDE7E8",
      corSecundaria: "#E06B69",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#FAE9F5",
      corSecundaria: "#DB6EBF",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFF5D9",
      corSecundaria: "#FFBA05",
    },
    {
      nome: "Inovação e gestão",
      corPrimaria: "#FFEEDF",
      corSecundaria: "#FF8A29",
    },
  ];
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdcionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador]);
  };
  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdcionado(colaborador)
        }
      />

      {times.map((time) => (
        <Time 
          key={time.nome}
          nome={time.nome} 
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          />
      ))}

      <Rodape />
    </div>
  );
}

export default App;
