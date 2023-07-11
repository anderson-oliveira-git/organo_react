import './App.css';
import Banner from "./components/Banner";
import Card from './components/Card';
import Form from './components/Form';

function App() {
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

      <Form/>

      {/* <Card/> */}
    </div>
  );
}

export default App;
