import { useState } from 'react';
import './App.css';
import Banner from "./components/Banner";
import Form from './components/Form';
import { Time } from './components/Time/Time';

function App() {

  const [time, setTime] = useState([]);

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#d9f7e9',
      corSecundaria: '#57c278'
    },
    {
      nome: 'Front-end',
      corPrimaria: '#e8f8ff',
      corSecundaria: '#82cffa'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#f0f8e2',
      corSecundaria: '#a6d157'
    },
    {
      nome: 'Devops',
      corPrimaria: '#fde7e8',
      corSecundaria: '#e06b69'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#fae9f5',
      corSecundaria: '#db6ebf'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#fff5d9',
      corSecundaria: '#ff8405'
    },
    {
      nome: 'Inovação e gestão',
      corPrimaria: '#ffeedf',
      corSecundaria: '#ff8a29'
    }
  ];

  const adicionarColaborador = (colaborador) => {
    setTime([...time, colaborador]);
  }

  return (
    <div className="App">
      <Banner 
        path="/images/my_banner.png"
        description="Banner do site na cor azul com título Pessoas e times
        organizadas em um só lugar. Contém algumas 
        formas geometricas de background e um grupo de pessoas 
        com as mãos do lado inferior direito com as mãos sobre
        postas demonstrando ser um time."
      />

      <Form times={times.map(time => time.nome)} colaboradorCadastro={colaborador => adicionarColaborador(colaborador)}/>

      {times.map(time => {
        return (
          <Time 
            key={time.nome} 
            title={time.nome}
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
          />
        );
      })}
    </div>
  );
}

export default App;
