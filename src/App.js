import './App.css';
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      <Banner 
        path="/images/banner.png"
        description="Banner do site na cor azul com título Pessoas e times
        organizadas em um só lugar. Contém algumas 
        formas geometricas de background e um grupo de pessoas 
        com as mãos do lado inferior direito com as mãos sobre
        postas demonstrando ser um time."
      />
    </div>
  );
}

export default App;
